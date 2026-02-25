const mongoose = require("mongoose");
const careerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  skills: [{ type: String, required: true }],
  interests: [{ type: String, index: true }],
  exams: [{ type: String }],
  salary: {
    fresher: { type: Number, required: true },
    mid: { type: Number, required: true },
    senior: { type: Number, required: true }
  },
  demandGrowth: { type: Number, required: true },
  roadmap: [{ type: String }],
  links: {
    official: String,
    preparation: String
  }
}, { timestamps: true });
module.exports = mongoose.model("Career", careerSchema);