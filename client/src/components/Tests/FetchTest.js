import React, { useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import Loading from "./Loading";
//Components
//reducers
// import TestContext from "../Context/TestContext";
import { SET_TEST } from "../Reducers/types";
import { initialState, testReducer } from "../Reducers/TestReducer";

const useStyles = makeStyles((theme) => ({
	main: {
		margin: "40px",
		"@media only screen and (max-width: 1024px)": {
			margin: "15px",
		},
	},
	startbox: {
		padding: "1%",
		marginTop: "5%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
}));

const MainTest = () => {
	const classes = useStyles();
	const history = useHistory();
	const [testId, setTestId] = useState("");

	const [state, dispatch] = useReducer(testReducer, initialState);
	// const [student, setStudent] = useReducer(StudentReducer, InitialState);

	const fetchTest = () => {
		fetch(`/showtest?testid=${testId}`, {
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((test) => {
				if (test.error) {
					console.log(test);
				} else {
					dispatch({ type: SET_TEST, test: test.test });
					history.push("/maintest");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className={classes.main}>
			<div className={classes.startbox}>
				<Paper elevation={5} className={classes.paper4}>
					<div>
						<TextField
							id="outlined-basic"
							label="Enter Test ID"
							variant="outlined"
							value={testId}
							onChange={(e) => setTestId(e.target.value)}
							fullWidth
						/>
					</div>
					<Button
						variant="contained"
						color="primary"
						// className={classes.button}
						style={{ width: "100%", marginTop: "3%" }}
						onClick={() => fetchTest()}>
						Begin Test
					</Button>
				</Paper>
			</div>
		</div>
	);
};

export default MainTest;
