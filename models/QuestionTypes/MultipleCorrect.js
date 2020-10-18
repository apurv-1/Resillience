const mongoose = require("mongoose");

const multipleCorrectSchema = new mongoose.Schema({
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
