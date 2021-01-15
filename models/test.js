const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    testId: { type: Number, required: true, unique: true },
    testName: { type: String, required: true },
    testDuration: { type: Number, required: true },
    noOfQuestions: { type: Number, required: true },
    forCorrect: { type: Number, default: 4 },
    forInCorrect: { type: Number, default: 1 },
    testType: { type: String },
    questions: [
      {
        questionNumber: {
          type: Number,
          required: true,
          unique: true
        },
        questionImage: {
          type: String,
          required: true
        },
        correctOption: {
          type: String,
          required: true
        },
        difficuilty: {
          type: String,
          required: true
        },
        subject: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

mongoose.model("Test", testSchema);
