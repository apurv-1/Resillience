import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Button } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Maintest from "../Tests/MainTest";
// import Loading from "../Tests/Loading";
// import UserContext from "../Context/UserContext";
import ShowAttemptedTest from "./ShowAttemptedTest";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		margin: "3rem",
		marginTop: "5rem",
		flexDirection: "row",
	},
	card: {
		width: "20rem",
		// "@media only screen and (max-width: 1125px)": {
		// 	width: "15rem",
		// },
	},
	pic: {
		height: "8rem",
		width: "8rem",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39)",
	},
	paper: {
		display: "flex",
		margin: "1rem",
		padding: "1rem",
		fontWeight: "bolder",
	},
	uploadImage: {
		position: "absolute",
		marginTop: "6rem",
		marginLeft: "5rem",
	},
	textbox: {
		marginLeft: "26%",
		marginTop: "5%",
	},
	loading: {
		display: "flex",
		justifyContent: "center",
	},
	editButton: {
		marginLeft: "5rem",
	},
}));

export default function StudentProfileDashboard() {
	const classes = useStyles();
	toast.configure();
	const { studentid } = useParams();
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const [student, setStudent] = useState([]);
	const [attemptedTests, setAttemptedTests] = useState([]);

	useEffect(() => {
		if (!student) {
			history.push("/");
		}
		fetch(`/student/${studentid}`, {
			method: "get",
			headers: {
				Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
			},
		})
			.then((res) => res.json())
			.then((studentDetails) => {
				setStudent(studentDetails.student);
			})
			.catch((err) => {
				console.log(err);
			});

		fetch(`/attempted-tests/${studentid}`, {
			method: "get",
			headers: {
				Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
			},
		})
			.then((res) => res.json())
			.then((tests) => {
				setAttemptedTests(tests.test);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Paper elevation={5} className={classes.root}>
			<div className={classes.card}>
				<div className={classes.paper} style={{ justifyContent: "center" }}>
					<Avatar className={classes.pic} alt="Student" src={student ? student.picture : ""} />
				</div>
				<span>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.editButton}
						startIcon={<EditOutlinedIcon />}
						onClick={() => setOpen(true)}>
						Edit Details
					</Button>
					<Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
						<DialogTitle id="form-dialog-title">Edit Student Info</DialogTitle>
						<DialogContent>
							<TextField
								margin="dense"
								id="name"
								label="Full Name"
								type="name"
								defaultValue={student.name}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="email"
								label="Email Address"
								type="email"
								defaultValue={student.email}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="text"
								label="Batch"
								type="text"
								defaultValue={student.batch}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="text"
								label="Phone Number"
								type="text"
								defaultValue={student.contact}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="text"
								label="Fathers Name"
								type="text"
								defaultValue={student.fname}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="text"
								label="Batch"
								type="text"
								defaultValue={student.batch}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="text"
								label="Parents Contact"
								type="text"
								defaultValue={student.parentContact}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="text"
								label="Address"
								type="text"
								defaultValue={student.address}
								fullWidth
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => setOpen(false)} color="primary">
								Cancel
							</Button>
							<Button color="primary">Save Changes</Button>
						</DialogActions>
					</Dialog>
				</span>
				<span className={classes.infoContainer}>
					<Paper elevation={3} className={classes.paper}>
						Name: {student ? student.name : ""}
					</Paper>
					<Paper elevation={3} className={classes.paper}>
						Email : {student ? student.email : ""}
					</Paper>

					<Paper elevation={3} className={classes.paper}>
						Batch : {student ? student.batch : ""}
					</Paper>
					<Paper elevation={3} className={classes.paper}>
						Phone Number : {student ? student.contact : ""}
					</Paper>

					<Paper elevation={3} className={classes.paper}>
						Fathers Name : {student ? student.fname : ""}
					</Paper>

					<Paper elevation={3} className={classes.paper}>
						Parents Contact : {student ? student.parentContact : ""}
					</Paper>

					<Paper elevation={3} className={classes.paper}>
						Address : {student ? student.address : ""}
					</Paper>
				</span>
			</div>
			<div>
				<ShowAttemptedTest attemptedTests={attemptedTests} />
			</div>
		</Paper>
	);
}
