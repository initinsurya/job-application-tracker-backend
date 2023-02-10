const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://nitinsurya:nitinsurya@cluster0.eqez64u.mongodb.net/test";
const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`host: ${conn.connection.host}`);
};

module.exports = connectDB;
