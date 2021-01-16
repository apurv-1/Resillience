import React, { useContext, useEffect, useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TestContext from "../Context/TestContext";
import {
	SET_CURRENT_INDEX,
	SET_SELECTED_ANSWERS,
	SET_SHOW_RESULTS,
	SET_IS_MARKED,
	SET_INCREMENT_TIME,
	SET_SUBJECT,
} from "../Reducers/types";
import { Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import UserContext from "../Context/UserContext";

// import TimeLeft from "./TimerComponent";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	buttonContainer: {
		display: "flex",
		justifyContent: "space-around",
		padding: "4%",
		paddingTop: "1%",
		"@media only screen and (max-width: 1024px)": {
			padding: "2%",
		},
		"@media only screen and (max-width: 770px)": {
			paddingTop: "0%",
			padding: "1%",
		},
		"@media only screen and (max-width: 440px)": {
			paddingTop: "0%",
			padding: "5px",
		},
	},
	button: {
		"@media only screen and (max-width: 1024px)": {
			fontSize: "12px",
		},
		"@media only screen and (max-width: 770px)": {
			fontSize: "9px",
		},
		"@media only screen and (max-width: 440px)": {
			fontSize: "7px",
		},
	},
}));
const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: blue,
	},
	typography: {
		fontFamily: ["muli", "sans-serif"].join(","),
		fontSize: "15",
		h6: {
			fontFamily: "Rubik",
		},
		button: {
			fontFamily: "Rubik",
		},
	},
});

const KeysComponent = () => {
	const classes = useStyles();
	const [openSubmitDialog, setOpenSubmitDialog] = useState(false);
	const { state, dispatch } = useContext(TestContext);
	const { userState } = useContext(UserContext);
	const {
		test,
		currentIndex,
		selectedAnswers,
		showResult,
		isMarked,
		timeElapsed,
		isVisited,
		isStarted,
	} = state;
	const questionLength = test.questions.length;
	const questions = test.questions;
	const { email } = userState.payload;

	if (isStarted === true && showResult === false) {
		window.onbeforeunload = function () {
			return "are you sure? Test will not be submitted";
		};
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			if (showResult) {
				clearTimeout(timer);
			}
			dispatch({ type: SET_INCREMENT_TIME });
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	});

	// console.log("selectd ", isMarked);
	const save = () => {
		if (currentIndex + 1 < questionLength) {
			dispatch({
				type: SET_CURRENT_INDEX,
				currentIndex: currentIndex + 1,
			});
			// console.log(questions[currentIndex].subject, currentSubject);

			dispatch({
				type: SET_SUBJECT,
				currentSubject: questions[currentIndex + 1].subject,
			});
			// }
			return;
		}
	};

	const clear = () => {
		isMarked[currentIndex] = false;
		dispatch({ type: SET_IS_MARKED, isMarked: isMarked });
		selectedAnswers[currentIndex] = "";
		dispatch({ type: SET_SELECTED_ANSWERS, selectedAnswers: selectedAnswers });
		// console.log(selectedAnswers);
		return;
	};

	const handleSubmitTest = () => {
		dispatch({
			type: SET_SHOW_RESULTS,
			showResult: true,
		});
		if (localStorage.getItem("student_jwt")) {
			fetch("/api/submit-Test", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("student_jwt"),
				},
				body: JSON.stringify({
					email: email,
					testId: test.testId,
					testDetails: test._id,
					selectedOptions: selectedAnswers,
					timePerQuestion: timeElapsed,
					visitedQuestion: isVisited,
				}),
			})
				.then((res) => res.json())
				.then((test) => {
					if (test.error) {
						console.log(test.error);
					} else {
						console.log(test.message);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const marked = () => {
		isMarked[currentIndex] = true;
		dispatch({ type: SET_IS_MARKED, isMarked: isMarked });
		if (currentIndex + 1 < questionLength) {
			dispatch({
				type: SET_CURRENT_INDEX,
				currentIndex: currentIndex + 1,
			});
			dispatch({
				type: SET_SUBJECT,
				currentSubject: questions[currentIndex + 1].subject,
			});
			return;
		}
	};

	return (
		<div className={classes.buttonContainer}>
			<Button variant="contained" color="primary" className={classes.button} onClick={() => clear()}>
				Clear Selection
			</Button>

			<Button variant="contained" color="primary" className={classes.button} onClick={() => marked()}>
				Review Later
			</Button>

			<Button variant="contained" color="primary" className={classes.button} onClick={() => save()}>
				Save & Next
			</Button>

			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				onClick={() => setOpenSubmitDialog(true)}>
				Submit Test
			</Button>
			<ThemeProvider theme={theme}>
				<Dialog
					open={openSubmitDialog}
					onClose={() => setOpenSubmitDialog(false)}
					aria-labelledby="alert-dialog-title">
					<div style={{ padding: "10px" }}>
						<DialogTitle id="alert-dialog-title">Confirm Submit Test, are you sure?</DialogTitle>
						<DialogActions style={{ display: "flex", justifyContent: "space-between" }}>
							<Button autoFocus onClick={() => setOpenSubmitDialog(false)} color="secondary">
								Resume Test
							</Button>
							<Button onClick={() => handleSubmitTest()} color="primary">
								Submit Test
							</Button>
						</DialogActions>
					</div>
				</Dialog>
			</ThemeProvider>
		</div>
	);
};

export default KeysComponent;
