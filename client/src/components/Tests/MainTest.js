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

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "20px",
		marginBottom: "0%",
		"@media only screen and (max-width: 1024px)": {
			margin: "12px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "5px",
		},
	},
	main: {
		margin: "1.5rem",
		marginTop: "4rem",
		display: "flex",
		flexDirection: "row",
		"@media only screen and (max-width: 1024px)": {
			margin: "0.6rem",
			marginTop: "4rem",
		},
		// "@media only screen and (max-width: 770px)": {
		// 	flexDirection: "column",
		// },
	},
	questionComponent: {
		margin: "10px",
		flex: "0.7",
		textAlign: "center",
	},

	timerComponent: {
		margin: "10px",
		flex: "0.3",
		height: "33rem",
		"@media only screen and (max-width: 1024px)": {
			height: "28rem",
		},
	},
	paper2: {
		marginTop: "2%",
		paddingTop: "0px",
		maxWidth: "70%",
		textAlign: "center",
		marginBottom: "-8%",
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
}));

const MainTest = () => {
	const classes = useStyles();
	toast.configure();

	const [testId, setTestId] = useState("");
	const [questionLength, setQuestionLength] = useState(0);

	const [state, dispatch] = useReducer(testReducer, initialState);
	const { showResult, isStarted } = state;

	const fetchTest = () => {
		if (testId !== "") {
			fetch(`/api/fetchtest?testid=${testId}`, {
				method: "get",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("student_jwt"),
				},
			})
				.then((res) => res.json())
				.then((test) => {
					if (test.error) {
						toast.error(test.error, {
							position: "bottom-right",
							autoClose: 4000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
					} else {
						dispatch({ type: SET_TEST, test: test.test });
						setQuestionLength(test.test.questions.length);
						// console.log(test.test);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			toast.error("Please enter the Test ID", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		}
	};

	return (
		<div className={classes.root}>
			{questionLength > 0 ? (
				<TestContext.Provider value={{ state, dispatch }}>
					{showResult === false && isStarted === true ? (
						<div className={classes.main}>
							<Paper elevation={5} className={classes.questionComponent}>
								<QuestionComponent />
								<KeysComponent />
							</Paper>
							<Paper elevation={5} className={classes.timerComponent}>
								<TimerComponent />
								<QuestionKeysComponent />
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
							style={{ width: "100%", marginTop: "3%" }}
							onClick={() => fetchTest()}>
							Begin Test
						</Button>
					</Paper>
				</div>
			)}
		</div>
	);
};

export default MainTest;
