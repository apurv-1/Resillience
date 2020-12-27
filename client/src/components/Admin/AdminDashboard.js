import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar } from "@material-ui/core";

// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
import Loading from "../Tests/Loading";
import UserContext from "../Context/UserContext";

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: "2rem",
	},
	loading: {
		display: "flex",
		justifyContent: "center",
	},
}));

export default function StudentProfile() {
	const classes = useStyles();
	const { userState } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userState.payload) {
			history.push("/");
		}
	}, []);
	//
	// 	const { name, email, batch, contact, fname, parentContact, address } = userState.payload;

	return (
		<div>
			<Paper elevation={5} className={classes.paper}>
				Hello
			</Paper>
		</div>
	);
}
