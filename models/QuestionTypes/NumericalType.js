const mongoose = require("mongoose");

const numericalType = new mongoose.Schema({
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
	answer: {
		type: Number,
		required: true,
	},
});

mongoose.model("Numerical", numericalType);
