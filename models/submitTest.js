const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const submitTestSchema = new mongoose.Schema({
	name: { type: ObjectId, ref: "Student" },
	email: { type: ObjectId, ref: "Student" },
	score: { type: Number },
	selectedOptions: { type: [] },
	test: { type: ObjectId, ref: "Test" },
	time: { type: Number },
	timePerQuestion: { type: [] },
});

mongoose.model("SubmitTest", submitTestSchema);
