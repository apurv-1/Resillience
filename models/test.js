const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
//question models
require("./QuestionTypes/SingleCorrect");
require("./QuestionTypes/MultipleCorrect");
require("./QuestionTypes/NumericalType");

const testSchema = new mongoose.Schema(
	{
		testId: {
			type: String,
			required: true,
			unique: true,
		},
		testName: {
			type: String,
			required: true,
		},
		testDuration: {
			type: Number,
			required: true,
		},
		noOfQuestions: {
			type: Number,
			required: true,
		},
		questions: [
			{
				questionNumber: {
					type: Number,
					// required: true,
				},
				questionType: {
					type: String,
					// required: true,
				},
				question: {
					singleCorrectQuestions: {
						type: String,
						ref: "SingleCorrect",
					},
					multipleCorrectQuestions: {
						type: ObjectId,
						ref: "MultipleCorrect",
					},
					numericalQuestions: {
						type: ObjectId,
						ref: "Numerical",
					},
				},
			},
		],
	},
	{ timestamps: true }
);

mongoose.model("Test", testSchema);

// questionImage:{
//     type: String,
//     required: true
// },
// correctOption:{
//     type: Number,
//     required: true
// },
