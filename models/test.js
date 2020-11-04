const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;
//question models
require("./QuestionTypes/SingleCorrect");
require("./QuestionTypes/MultipleCorrect");
require("./QuestionTypes/NumericalType");

const testSchema = new mongoose.Schema(
	{
		testId: {
			type: Number,
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
					required: true,
					unique: true,
				},
				questionImage: {
					type: String,
					required: true,
				},
				correctOption: {
					type: String,
					required: true,
				},
				subject: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ timestamps: true }
);

mongoose.model("Test", testSchema);

// questions: [
// 	{
//
// singleCorrectQuestions: [
// 	{
// 		type: ObjectId,
// 		ref: "SingleCorrect",
// 	},
// ],
//
// multipleCorrectQuestions: {
// 	type: ObjectId,
// 	ref: "MultipleCorrect",
// },
//
// numericalQuestions: {
// 	type: ObjectId,
// 	ref: "Numerical",
// },
// 	},
// ],
