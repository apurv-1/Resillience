const mongoose = require("mongoose");

const multipleCorrectSchema = new mongoose.Schema({
	questionNumber: {
		type: Number,
		required: true,
		unique: true,
	},
	questionImage: {
		type: String,
		required: true,
	},
	correctOptionOne: {
		type: Number,
		required: true,
	},
	correctOptionTwo: {
		type: Number,
	},
	correctOptionThree: {
		type: Number,
	},
});

mongoose.model("MultipleCorrect", multipleCorrectSchema);
