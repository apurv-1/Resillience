import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Button, Fab } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// import Maintest from "../Tests/MainTest";
import Loading from "../Tests/Loading";
import UserContext from "../Context/UserContext";
import AttemptedTest from "./AttemptedTest";

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
	},
	paper: {
		display: "flex",
		margin: "1rem",
		padding: "1rem",
		fontWeight: "bolder",
	},
	uploadImage: {
		position: "absolute",
		marginTop: "5.8rem",
		marginLeft: "4.5rem",
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

export default function StudentProfile() {
	const classes = useStyles();
	const { userState } = useContext(UserContext);
	const history = useHistory();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!userState.payload) {
			history.push("/");
		}
	}, []);
	//
	// 	const { name, email, batch, contact, fname, parentContact, address } = userState.payload;

	return (
		<Paper elevation={5} className={classes.root}>
			<div>
				{userState.payload ? (
					<div className={classes.card}>
						<div className={classes.paper} style={{ justifyContent: "center" }}>
							<Avatar
								className={classes.pic}
								alt="Student"
								src={userState.payload ? userState.payload.picture : ""}
							/>
							<span className={classes.uploadImage}>
								<input accept="image/*" style={{ display: "none" }} id="icon-button-file" type="file" />
								<label htmlFor="icon-button-file">
									<Fab size="small" color="secondary" aria-label="upload picture" component="span">
										<PhotoCamera />
									</Fab>
								</label>
							</span>
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
										defaultValue={userState.payload.name}
										fullWidth
									/>
									<TextField
										margin="dense"
										id="email"
										label="Email Address"
										type="email"
										defaultValue={userState.payload.email}
										fullWidth
									/>
									<TextField
										margin="dense"
										id="text"
										label="Batch"
										type="text"
										defaultValue={userState.payload.batch}
										fullWidth
									/>
									<TextField
										margin="dense"
										id="text"
										label="Phone Number"
										type="text"
										defaultValue={userState.payload.contact}
										fullWidth
									/>
									<TextField
										margin="dense"
										id="text"
										label="Fathers Name"
										type="text"
										defaultValue={userState.payload.fname}
										fullWidth
									/>
									<TextField
										margin="dense"
										id="text"
										label="Batch"
										type="text"
										defaultValue={userState.payload.batch}
										fullWidth
									/>
									<TextField
										margin="dense"
										id="text"
										label="Parents Contact"
										type="text"
										defaultValue={userState.payload.parentContact}
										fullWidth
									/>
									<TextField
										margin="dense"
										id="text"
										label="Address"
										type="text"
										defaultValue={userState.payload.address}
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
								Name: {userState.payload ? userState.payload.name : ""}
							</Paper>
							<Paper elevation={3} className={classes.paper}>
								Email : {userState.payload ? userState.payload.email : ""}
							</Paper>

							<Paper elevation={3} className={classes.paper}>
								Batch : {userState.payload ? userState.payload.batch : ""}
							</Paper>
							<Paper elevation={3} className={classes.paper}>
								Phone Number : {userState.payload ? userState.payload.contact : ""}
							</Paper>

							<Paper elevation={3} className={classes.paper}>
								Fathers Name : {userState.payload ? userState.payload.fname : ""}
							</Paper>

							<Paper elevation={3} className={classes.paper}>
								Parents Contact : {userState.payload ? userState.payload.parentContact : ""}
							</Paper>

							<Paper elevation={3} className={classes.paper}>
								Address : {userState.payload ? userState.payload.address : ""}
							</Paper>
						</span>
					</div>
				) : (
					<div className={classes.loading}>
						<Loading />
					</div>
				)}
			</div>
			<div>
				<AttemptedTest />
			</div>
		</Paper>
	);
}
