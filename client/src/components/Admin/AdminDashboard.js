import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import Loading from "../Tests/Loading";
import UserContext from "../Context/UserContext";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: "5rem",
		margin: "1rem",
		display: "flex",
	},
	details: {
		flex: "0.3",
		padding: "4rem",
		flexDirection: "column",
	},
	loading: {
		display: "flex",
		justifyContent: "center",
	},
}));

export default function AdminProfile() {
	const classes = useStyles();
	const { userState } = useContext(UserContext);

	const history = useHistory();
	const [activeTest, setActiveTest] = useState([]);

	useEffect(() => {
		if (!userState.payload) {
			history.push("/");
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem("admin_jwt")) {
			fetch("/alltests", {
				method: "get",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
				},
			})
				.then((res) => res.json())
				.then((activeTests) => {
					// console.log(activeTests);
					setActiveTest(activeTests.test);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);
	console.log(activeTest);
	//
	// 	const { name, email, batch, contact, fname, parentContact, address } = userState.payload;

	return (
		<div>
			<Paper elevation={5} className={classes.paper}>
				{activeTest.length > 0 &&
					activeTest.map(({ testName }, index) => (
						<div className={classes.details} key={index}>
							<b>{testName}</b>
						</div>
					))}
			</Paper>
		</div>
	);
}
