import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import Loading from "./Loading";
//Components
import KeysComponent from "./KeysComponent";
import QuestionComponent from "./QuestionComponent";
import QuestionKeysComponent from "./QuestionKeysComponent";
import TimerComponent from "./TimerComponent";
import TestResult from "./TestResult";
//reducers
import TestContext from "../Context/TestContext";
import { SET_TEST } from "../Reducers/types";
import { initialState, testReducer } from "../Reducers/TestReducer";
import StartPage from "./StartPage";
// import { InitialState, StudentReducer } from "../Reducers/Reducer";

const useStyles = makeStyles((theme) => ({
	main: {
		margin: "40px",
		"@media only screen and (max-width: 1024px)": {
			margin: "15px",
		},
	},
	root: {
		// marginTop: "5%",
		// paddingLeft: "60px",
		// paddingRight: "60px",
	},
	paper1: {
		marginTop: "6%",
		paddingTop: "40px",
		maxWidth: "70%",
		textAlign: "center",
	},
	paper2: {
		marginTop: "2%",
		paddingTop: "0px",
		maxWidth: "70%",
		textAlign: "center",
		marginBottom: "-8%",
	},
	paper3: {
		float: "right",
		paddingTop: "20px",
		width: "27%",
	},
	startbox: {
		padding: "1%",
		marginTop: "5%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	paper4: {
		padding: "5%",
		textAlign: "center",
	},
	text: {
		border: "2px",
		padding: "2%",
	},
	toast: {
		width: "100%",
		textAlign: "center",
		"& > * + *": {
			marginTop: "5px",
		},
	},
}));

const MainTest = () => {
	const classes = useStyles();
	const [testId, setTestId] = useState("");
	const [questionLength, setQuestionLength] = useState(0);

	// const [start, setStart] = useState(false);
	const [state, dispatch] = useReducer(testReducer, initialState);
	// const [student, setStudent] = useReducer(StudentReducer, InitialState);
	const { showResult, isStarted } = state;

	const fetchTest = () => {
		fetch(`/showtest?testid=${testId}`, {
			method: "get",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("student_jwt"),
			},
		})
			.then((res) => res.json())
			.then((test) => {
				if (test.error) {
					// setOpenAlert(true);
					console.log(test);
				} else {
					dispatch({ type: SET_TEST, test: test.test });
					setQuestionLength(test.test.questions.length);
					// console.log(test.test);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// console.log("hello: ", timeElapsed);

	return (
		<div className={classes.main}>
			{
				questionLength > 0 ? (
					<TestContext.Provider value={{ state, dispatch }}>
						{showResult === false && isStarted === true ? (
							<div className={classes.root}>
								<Paper elevation={5} className={classes.paper3}>
									<TimerComponent />
									<QuestionKeysComponent />
								</Paper>

								<Paper elevation={5} className={classes.paper1}>
									<QuestionComponent />
									<KeysComponent />
								</Paper>
							</div>
						) : isStarted === false ? (
							<StartPage />
						) : (
							<TestResult />
						)}
					</TestContext.Provider>
				) : (
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
				)
				// : (
				// 	<InstructionsPage />
				// )
			}
		</div>
	);
};

export default MainTest;
