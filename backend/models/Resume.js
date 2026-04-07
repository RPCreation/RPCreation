const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  data: Object,
  template: String,
  accent: String,
  font: String,
  version: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.models.Resume || mongoose.model('Resume', resumeSchema);
