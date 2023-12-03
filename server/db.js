const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the Mongo");
  } catch (err) {
    console.log({ message: err.message });
  }
};

module.exports = connectToMongo;
