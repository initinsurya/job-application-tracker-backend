const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    unique: true,
    required: [true, "please add country"],
    trim: true,
  },
  company: {
    type: String,
    required: [true, "please add company"],
    trim: true,
  },
  dateApplied: {
    type: Date,
    required: [true, "please add dateApplied"],
    trim: true,
  },
  status: {
    type: String,
    required: [true, "please add status"],
    trim: true,
  },
  link: {
    type: String,
    required: [true, "please add link"],
    trim: true,
  },
});

module.exports = mongoose.model("job", jobSchema);
