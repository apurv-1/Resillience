const mongoose = require("mongoose");

const numericalType = new mongoose.Schema({
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
