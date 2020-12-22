const mongoose = require("mongoose");

const uri = `mongodb://localhost:27017/anime`;

const connection = mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = connection;