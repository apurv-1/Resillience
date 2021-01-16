const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

//models
const Admin = mongoose.model("Admin");
const Student = mongoose.model("Student");
const Message = mongoose.model("Message");
const Test = mongoose.model("Test");
const Counselling = mongoose.model("Counselling");

//jwt
const jwt = require("jsonwebtoken");
const { JWT_ADMIN, JWT_STUDENT } = require("../config/keys");

//middlewares
const requireStudent = require("../middleware/requireStudent");
const requireAdmin = require("../middleware/requireAdmin");

//hashed password
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

//node mailer
const nodemailer = require("nodemailer");
const { EMAIL, PASS } = require("../config/keys");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: EMAIL,
		pass: PASS,
	},
});

router.post("/send-mail", (req, res) => {
	const { parentname, phone, tuition } = req.body;
	if (!parentname) {
		return res.status(422).json({ parentname: "Please enter name" });
	}
	if (!phone) {
		return res.status(422).json({ phone: "Please enter phone number" });
	}
	if (!tuition) {
		return res.status(422).json({ tuition: "Please enter tuition" });
	}
	const counselling = new Counselling({
		parentname,
		phone,
		tuition,
	});
	counselling
		.save()
		.then((mail) => {
			transporter.sendMail({
				to: "resillience.in@gmail.com",
				from: EMAIL,
				subject: "New Counselling alert!",
				html: `Hey! ${parentname} asked for free counselling of ${tuition}, <br /> with Mobile no. ${phone}`,
			});
			res.json({ message: "Team Resillience will contact you soon!" });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

router.post("/send-message", (req, res) => {
	const { name, email, phone, text } = req.body;
	if (!name) {
		return res.status(422).json({ name: "Please enter name" });
	}
	if (!email) {
		return res.status(422).json({ email: "Please enter email" });
	}
	if (!text) {
		return res.status(422).json({ text: "Please write message!! " });
	}
	const message = new Message({
		name,
		email,
		phone,
		text,
	});
	message
		.save()
		.then((message) => {
			transporter.sendMail({
				to: "resillience.in@gmail.com",
				from: EMAIL,
				subject: `A new message from ${name}, and ${email}`,
				html: `Hey, ${text}<br /> from phone no: ${phone}`,
			});
			res.json({ message: "Team Resillience will contact you soon!" });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

router.post("/admin/signup", (req, res) => {
	const { name, email, password } = req.body;

	if (!name) {
		return res.status(422).json({ name: "Please add name" });
	}
	if (!email) {
		return res.status(422).json({ email: "Please add email" });
	}
	if (!password) {
		return res.status(422).json({ password: "Please add password" });
	}

	Admin.findOne({ email }).then((savedAdmin) => {
		if (savedAdmin) {
			return res.status(422).json({ error: "This Admin already exists" });
		}
		bcrypt.hash(password, 12).then((encryptedPassword) => {
			const admin = new Admin({
				name,
				email,
				password: encryptedPassword,
			});

			admin
				.save()
				.then((admin) => {
					res.json({ message: "Admin added!" });
				})
				.catch((err) => {
					console.log(err);
					res.status(500).json({ error: err });
				});
		});
	});
});

router.post("/student-signup", (req, res) => {
	const {
		name,
		email,
		password,
		batch,
		contact,
		parentContact,
		fname,
		address,
		picture,
		attemptedTests,
	} = req.body;
	if (!name) {
		return res.status(422).json({ error: "Please add name" });
	}
	if (!email) {
		return res.status(422).json({ error: "Please add email" });
	}
	if (!password) {
		return res.status(422).json({ error: "Please add password" });
	}
	if (!contact) {
		return res.status(422).json({ error: "Please add mobile number" });
	}
	Student.findOne({ email }).then((savedStudent) => {
		if (savedStudent) {
			return res.status(422).json({ error: "The student already exists" });
		}
		bcrypt.hash(password, 12).then((encryptedPassword) => {
			const student = new Student({
				name,
				email,
				password: encryptedPassword,
				batch,
				contact,
				parentContact,
				fname,
				address,
				picture,
				attemptedTests,
			});

			student
				.save()
				.then((student) => {
					// sending enrollment mail to student
					transporter.sendMail({
						to: student.email,
						from: EMAIL,
						subject: "Enrollment Successful!",
						html: `<h2>Hello ${student.name},</h2>
            <h5>You're successfully enrolled for batch ${student.batch}. <br />Regards!,
            <br />Your Email is : ${email}
            <br />Your password is: ${password}.</h5>
						<br />Team Resillience.`,
					});
					res.json({ message: "Student added!" });
				})
				.catch((err) => {
					console.log(err);
					res.status(500).json({ error: err });
				});
		});
	});
});

router.post("/admin-signin", (req, res) => {
	const { email, password } = req.body;

	if (!email) {
		return res.status(422).json({ email: "Please add email" });
	}
	if (!password) {
		return res.status(422).json({ password: "Please add password" });
	}
	Admin.findOne({ email }).then((savedAdmin) => {
		if (!savedAdmin) {
			return res.status(422).json({ error: "Invalid email or password" });
		}
		bcrypt
			.compare(password, savedAdmin.password)
			.then((doMatch) => {
				if (doMatch) {
					// res.json({message:"Signin Successful!"})
					const token = jwt.sign({ _id: savedAdmin._id }, JWT_ADMIN);
					const { _id, name, email, picture } = savedAdmin;
					res.json({
						token: token,
						admin: { _id, name, email, picture },
						message: "Admin signed in successfully",
					});
				} else {
					return res.status(422).json({ error: "Invalid email or password" });
				}
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ error: err });
			});
	});
});

router.post("/student-signin", (req, res) => {
	const { email, password } = req.body;

	if (email == "") {
		return res.status(422).json({ email: "Please add email" });
	}
	if (password == "") {
		return res.status(422).json({ password: "Please add password" });
	}
	Student.findOne({ email: email }).then((savedStudent) => {
		if (!savedStudent) {
			return res.status(422).json({ error: "Invalid email or password" });
		}
		bcrypt
			.compare(password, savedStudent.password)
			.then((doMatch) => {
				if (doMatch) {
					// res.json({ message: "Signin Successful!" });
					const token = jwt.sign({ _id: savedStudent._id }, JWT_STUDENT);
					const {
						_id,
						name,
						email,
						batch,
						contact,
						parentContact,
						fname,
						address,
						picture,
					} = savedStudent;
					res.json({
						token,
						student: {
							_id,
							name,
							email,
							batch,
							contact,
							parentContact,
							fname,
							address,
							picture,
						},
						message: "Signin Successful!",
					});
				} else {
					return res.status(422).json({ error: "Invalid email or password" });
				}
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ error: err });
			});
	});
});

router.post("/reset-student-password", (req, res) => {
	crypto.randomBytes(32, (err, buffer) => {
		if (err) {
			console.log(err);
		}
		const token = buffer.toString("hex");
		const { email } = req.body;
		Student.findOne({ email: email }).then((student) => {
			if (!student) {
				return res.status(404).json({ error: "Student with this email does not exists!" });
			}
			student.resetToken = token;
			student.expireToken = Date.now() + 900000; // token will expire after 15mins
			student.save().then((mail) => {
				transporter.sendMail({
					//will work only in production at resillience.in
					to: email,
					from: EMAIL,
					subject: "Resillience - reset password!",
					html: `<h2>Hey! ${email},</h2>
					<h3>Your request for password has been processed!<br />
					Click <a href="http://localhost:3000/reset-password/${token}">here</a> 
					to reset your password!</h3> <h4>NOTE: This link is only valid for 15 minutes.</h4>`,
				});
			});
		});
	});
});

router.post("/new-password", (req, res) => {
	const newPassword = req.body.password;
	const sentToken = req.body.token;
	Student.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
		.then((student) => {
			if (!student) {
				return res.status(422).json({ error: "Password expired.. Try again!" });
			}
			bcrypt.hash(newPassword, 12).then((hashedpassword) => {
				student.password = hashedpassword;
				student.resetToken = undefined;
				student.expireToken = undefined;
				student.save().then(() => {
					res.json({ message: "Updated password Successfully!" });
				});
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
