const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		lowercase: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
		required: true,
	},
	picture: {
		type: String,
		default:
			"https://res.cloudinary.com/rweb1/image/upload/v1599639734/resilience_default_lqmb3p.png",
	},
	password: {
		type: String,
		required: true,
	},
});

mongoose.model("Admin", adminSchema);
