const mongoose = require("mongoose");

const multipleCorrectSchema = new mongoose.Schema({
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
	correctOption: [
		{
			one: { type: Number, required: true },
			two: { type: Number },
			three: { type: Number },
		},
	],
});

mongoose.model("MultipleCorrect", multipleCorrectSchema);

// correctOptionOne: {
// 	type: Number,
// 	required: true,
// },
// correctOptionTwo: {
// 	type: Number,
// },
// correctOptionThree: {
// 	type: Number,
// },
