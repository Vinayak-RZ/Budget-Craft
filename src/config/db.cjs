const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURL = "mongodb://localhost:27017/myapp";
  console.log('MONGO_URL:', process.env.MONGO_URL);
  if (!mongoURL) {
    throw new Error('MONGO_URL Nooooo');
  }

  try {
    await mongoose.connect(mongoURL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
