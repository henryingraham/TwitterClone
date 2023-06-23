const express = require('express');
const requireFirebaseToken = require('../middleware/requireFirebaseToken');

const router = express.Router();
const {
    createTweet,
    getAllTweets,
    getCurrentUserTweets,
    deleteTweet,
} = require('../controllers/tweetController');

router.get('/', requireFirebaseToken, getAllTweets);
router.post('/', requireFirebaseToken, createTweet);
router.get('/showMyTweets', requireFirebaseToken, getCurrentUserTweets);
router.delete('/:id', deleteTweet);

module.exports = router;
