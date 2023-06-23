// Express
const express = require("express");
const path = require("path");

// firebase
const app = express();
const admin = require("./db/firebaseAdmin");

//Security
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const expresLimiter = require('express-rate-limit');

var corsOptions = {
  origin: '*', //  frontend domain
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use(cors());


app.use(express.json());

// Routers
const tweetRouter = require("./routes/tweetRoutes");

// Endpoints
app.use("/dashboard/tweets", tweetRouter);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running`);
});
