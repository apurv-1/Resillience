import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles, Paper, TextField, Button, Typography } from "@material-ui/core";

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
		padding: "2.1rem",
		display: "flex",
		width: "30rem",
		flexDirection: "column",
		textAlign: "center",
		marginBottom: "0%",
	},
	textField: {
		margin: "10px",
	},
	button: {
		margin: "10px",
		marginTop: "1rem",
	},
}));

const NewPassword = () => {
	const classes = useStyles();
	toast.configure();
	const history = useHistory();
	const { token } = useParams();

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	// const [picture, setPicture] = useState("");

	const ChangePassword = () => {
		if (password !== confirmPassword) {
			toast.error("Password does not match! Try again..", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
			setConfirmPassword("");
		} else {
			//api call for new
			fetch("/api/new-password", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					password,
					token,
				}),
			})
				.then((res) => res.json())
				.then((info) => {
					if (info.error) {
						toast.error(info.error, {
							position: "bottom-right",
							autoClose: 4000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
						setConfirmPassword("");
						setPassword("");
					} else {
						toast.success(info.message, {
							position: "bottom-right",
							autoClose: 20000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
						setConfirmPassword("");
						setPassword("");
						history.push("/");
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
				<Typography variant="h4">New Password</Typography>
				<br />

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

				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					startIcon={<SaveIcon />}
					onClick={() => ChangePassword()}>
					Save Password
				</Button>
			</Paper>
		</div>
	);
};

export default NewPassword;
