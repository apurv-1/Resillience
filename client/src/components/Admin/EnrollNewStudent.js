import React, { useState } from "react";
import {
	makeStyles,
	Paper,
	TextField,
	Button,
	Typography,
	TextareaAutosize,
} from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles(() => ({
	root: {
		marginTop: "5rem",

		display: "flex",
		justifyContent: "center",
	},
	paper: {
		padding: "2rem",
		display: "flex",
		width: "30rem",
		flexDirection: "column",
		textAlign: "center",
		marginBottom: "0%",
	},
	textField: {
		margin: "5px",
	},
	addressField: {
		margin: "13px",
	},
	button: {
		margin: "1rem",
		marginTop: "1rem",
	},
}));

const EnrollNewStudent = () => {
	const classes = useStyles();
	toast.configure();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [batch, setBatch] = useState("");
	const [contact, setContact] = useState("");
	const [parentContact, setParentContact] = useState("");
	const [fname, setFname] = useState("");
	const [address, setAddress] = useState("");
	// const [picture, setPicture] = useState("");

	const EnrollStudent = () => {
		if (!name || !email || !password || !contact || !parentContact || !address) {
			toast.error("Please fill all the fields..", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		} else if (password !== confirmPassword) {
			toast.error("Password does not match! Try again..", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		} else {
			//api call for student signup
			fetch("/api/student-signup", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
				},
				body: JSON.stringify({
					name,
					email,
					password,
					batch,
					contact,
					parentContact,
					fname,
					address,
				}),
			})
				.then((res) => res.json())
				.then((student) => {
					if (student.error) {
						toast.error(student.error, {
							position: "bottom-right",
							autoClose: 4000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
						console.log(test.error);
					} else {
						toast.success(`Enrollment Successful! Welcome ${name}.`, {
							position: "bottom-right",
							autoClose: 20000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
						setName("");
						setEmail("");
						setAddress("");
						setBatch("");
						setConfirmPassword("");
						setPassword("");
						setFname("");
						setParentContact("");
					}
				})
				.catch((err) => {
					console.log(err);
					toast.error(err, {
						position: "bottom-right",
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
					});
				});
		}
	};

	return (
		<div className={classes.root}>
			<Paper elevation={5} className={classes.paper}>
				<Typography variant="h4">
					Enroll New Student{" "}
					<span role="img" aria-label="student">
						🤵
					</span>
				</Typography>
				<br />
				<div>
					<TextField
						id="name"
						label="Name"
						variant="outlined"
						className={classes.textField}
						value={name}
						type="text"
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						id="email"
						label="Email"
						variant="outlined"
						className={classes.textField}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<TextField
						id="password"
						label="Password"
						variant="outlined"
						className={classes.textField}
						value={password}
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<TextField
						id="confirm-password"
						label="Confirm Password"
						variant="outlined"
						className={classes.textField}
						value={confirmPassword}
						type="password"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<div>
					<TextField
						id="batch"
						label="Batch"
						variant="outlined"
						className={classes.textField}
						value={batch}
						onChange={(e) => setBatch(e.target.value)}
					/>
					<TextField
						id="contact"
						label="Phone Number"
						variant="outlined"
						className={classes.textField}
						value={contact}
						type="text"
						onChange={(e) => setContact(e.target.value)}
					/>
				</div>
				<div>
					<TextField
						id="fname"
						label="Fathers Name"
						variant="outlined"
						className={classes.textField}
						value={fname}
						type="text"
						onChange={(e) => setFname(e.target.value)}
					/>
					<TextField
						id="parents-contact"
						label="Parent Contact Number"
						variant="outlined"
						className={classes.textField}
						value={parentContact}
						type="text"
						onChange={(e) => setParentContact(e.target.value)}
					/>
				</div>

				<TextareaAutosize
					aria-label="empty textarea"
					placeholder="Address"
					className={classes.addressField}
					rowsMin={3}
					value={address}
					type="text"
					onChange={(e) => setAddress(e.target.value)}
				/>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					startIcon={<SaveIcon />}
					onClick={() => EnrollStudent()}>
					Enroll
				</Button>
			</Paper>
		</div>
	);
};

export default EnrollNewStudent;
