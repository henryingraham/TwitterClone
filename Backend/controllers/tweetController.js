const admin = require('firebase-admin');
const { StatusCodes } = require('http-status-codes');

const db = admin.firestore();

const createTweet = async (req, res) => {
  const { title, description } = req.body;
  const { name, picture } = req.user;
  if (!title || !description || !name || !picture) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Missing required fields',
    });
  }
  const newTweet = {
    title,
    description,
    company: name.slice(8),
    status: false,
    submissionLink: null,
    dateCreated: admin.firestore.FieldValue.serverTimestamp(),
    dateCompleted: null,
    createdBy: name,
    submissionStatus: false,
    student: '',
    displayPhoto: picture,
  };
  try {
    await db.collection('tweets').add(newTweet);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Failed to create tweet',
    });
  }
  res.status(StatusCodes.CREATED).json({ msg: 'Successfuly created tweet' });
};

const getAllTweets = async (req, res) => {
  const tweetCollection = db.collection('tweets');
  const snapshot = await tweetCollection.get();
  if (snapshot.empty) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: 'Tweets not found' });
  }
  const tweets = [];
  snapshot.forEach((doc) => {
    const tweet = doc.data();
    tweet.id = doc.id;
    tweets.push(tweet);
  });
  res.status(StatusCodes.OK).json(tweets);
};

const getCurrentUserTweets = async (req, res) => {
  const { name } = req.user;
  if (!name) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Missing required fields',
    });
  }
  const displayName = name.slice(8);
    const tweetRef = db.collection('tweets');
    const snapshot = await tweetRef.where('User', '==', displayName).get();
    if (snapshot.empty) {
      return res.status(404).send('No matching tweets.');
    }
    const tweets = [];
    snapshot.forEach((doc) => {
      const { id } = doc;
      const data = doc.data();
      tweets.push({ id, ...data });
    });
    res.status(200).json(tweets);
};


const deleteTweet = async (req, res) => {
  const displayName = req.user.name;
  const tweetId = req.params.id;
  if (!tweetId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Missing required tweet ID' });
  }

  try {
    const tweetRef = db.collection('tweets').doc(tweetId);
    const doc = await tweetRef.get();
    if (!doc.exists) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: 'Tweet not found' });
    }

    await tweetRef.delete();
    return res
      .status(StatusCodes.OK)
      .json({ message: `Tweet ${tweetId} deleted successfully` });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal server error', msg: err });
  }
};

module.exports = {
  createTweet,
  getAllTweets,
  getCurrentUserTweets,
  deleteTweet,
};
