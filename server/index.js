const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require('./config/db');
const posts = require('./routes/post')

const app = express();

//Middleware setup.
// dotenv.config({path: './config/config.env'})
app.use(cors({
  origin: 'http://localhost:8080'
}));

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }))


// Posts route
app.use('/api/posts/', posts)

mongoose.connect(`${config.MONGO_URI}`, {useNewUrlParser: true, useUnifiedTopology: true},
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to MongoDB");
    app.listen(config.PORT, () => {
      console.log(`Server running in ${config.NODE_ENV} and listening on port ${config.PORT}...`);
    });
  }
);