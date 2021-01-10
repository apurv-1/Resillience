const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const studentSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: {
			type: String,
			lowercase: true,
			match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
			required: true,
		},
		password: { type: String, required: true },
		batch: { type: String },
		contact: {
			type: String,
			required: true,
		},
		parentContact: { type: String },
		fname: { type: String },
		address: { type: String },
		picture: {
			type: String,
			default:
				"https://res.cloudinary.com/rweb1/image/upload/v1599639734/resilience_default_lqmb3p.png",
		},
		attemptedTests: [{ type: ObjectId, ref: "Test" }],
		resetToken: String,
		expireToken: Date,
	},
	{ timestamps: true }
);

mongoose.model("Student", studentSchema);
