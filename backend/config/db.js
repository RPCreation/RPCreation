const mongoose = require('mongoose');

async function connectDB(uri) {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.warn('MongoDB not connected, using in-memory fallback:', error.message);
  }
}

module.exports = connectDB;
