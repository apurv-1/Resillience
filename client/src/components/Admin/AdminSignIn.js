import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Paper, TextField, Button, Typography } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../Context/UserContext";
import { SET_ADMIN, SET_USER_TYPE, CLEAR } from "../Reducers/types";
// +import ShowTest from "./ShowTestComponent";

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
		marginBottom: "-6rem",
	},
	textField: {
		margin: "5px",
	},
	button: {
		margin: "5px",
		marginTop: "1rem",
	},
}));

const AdminSignIn = () => {
	const classes = useStyles();
	toast.configure();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { userDispatch } = useContext(UserContext);

	const handleAdminSignIn = () => {
		if (!email || !password) {
			toast.error("Please Fill all the fields..", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		} else {
			fetch("/api/admin-signin", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					if (data.error) {
						toast.error(data.error, {
							position: "bottom-right",
							autoClose: 4000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
					} else {
						toast.success("Sign-In Successful! Welcome Admin", {
							position: "bottom-right",
							autoClose: 20000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
						userDispatch({ type: CLEAR });
						localStorage.clear();

						localStorage.setItem("admin_jwt", data.token);
						userDispatch({ type: SET_ADMIN, payload: data.admin });
						userDispatch({ type: SET_USER_TYPE, userType: "admin" });
						setEmail("");
						setPassword("");
						history.push("/admin-dashboard");
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
				<Typography variant="h4">Admin SignIn 👨🏼‍✈️</Typography>
				<br />

				<TextField
					id="email"
					label="Email"
					variant="outlined"
					className={classes.textField}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<TextField
					id="password"
					label="Password"
					variant="outlined"
					className={classes.textField}
					value={password}
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					startIcon={<SaveIcon />}
					onClick={() => handleAdminSignIn()}>
					Sign In
				</Button>
			</Paper>
		</div>
	);
};

export default AdminSignIn;
