const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_CONNECTION;

mongoose.set('strictQuery', true);

const connect = () => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return mongoose.connection
};

module.exports = connect;
