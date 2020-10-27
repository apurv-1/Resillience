const mongoose = require("mongoose");

const singleCorrectSchema = new mongoose.Schema({
	questionNumber: {
		type: Number,
		// required: true,
	},
	questionType: {
		type: String,
		// required: true,
	},
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
