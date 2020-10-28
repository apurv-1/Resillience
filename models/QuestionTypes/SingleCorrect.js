const mongoose = require("mongoose");

const singleCorrectSchema = new mongoose.Schema({
	// id:{type:Number},
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
