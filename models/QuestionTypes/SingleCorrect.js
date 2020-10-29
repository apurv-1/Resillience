const mongoose = require("mongoose");

const singleCorrectSchema = new mongoose.Schema({
	questionNumber: { type: Number },
	questionType: { type: String },

	questionImage: {
		type: String,
		required: true,
	},
	correctOption: {
		type: Number,
		required: true,
	},
});

mongoose.model("SingleCorrect", singleCorrectSchema);
