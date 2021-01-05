const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const submitTestSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			lowercase: true,
			match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
			required: true,
		},
		testId: {
			type: Number,
			required: true,
		},
		studentDetails: {
			type: ObjectId,
			ref: "Student",
		},
		testDetails: {
			type: ObjectId,
			ref: "Test",
		},
		score: { type: Number },
		selectedOptions: [{ type: String }],
		timePerQuestion: [{ type: Number }],
		visitedQuestion: [{ type: Boolean }],
	},
	{ timestamps: true }
);

mongoose.model("SubmitTest", submitTestSchema);
