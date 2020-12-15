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
import { Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";

import TimeLeft from "./TimerComponent";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	button: {},
	buttonContainer: {
		marginLeft: "5%",
		marginRight: "5%",
		padding: "4%",
		display: "flex",
		justifyContent: "space-around",
	},
	toast: {
		width: "100%",
		textAlign: "center",
		"& > * + *": {
			marginTop: "5px",
		},
	},
	container: {
		display: "flex",
		padding: "7px",
		justifyContent: "space-between",
	},
	showMarked: {
		margin: "5px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#565fb8",
	},
	showVisited: {
		margin: "8px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#FF6961",
	},
	showAttempted: {
		margin: "5px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#2E8B57",
	},
	showLabel: {
		margin: "4px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
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
	const { test, currentIndex, selectedAnswers, showResult, isMarked } = state;
	const questionLength = test.questions.length;
	const questions = test.questions;
	//
	// 	let mark = 0,
	// 		notAnswered = 0,
	// 		answered = 0,
	// 		notVisited = 0;
	// 	// const [time, setTime] = useState(timeElapsed);
	//
	// 	const currentStats = () => {
	// 		for (let index = 0; index < test.questions.length; index++) {
	// 			if (selectedAnswers[index]) {
	// 				answered = answered + 1;
	// 				console.log("ans");
	// 			}
	// 			if (isMarked[index]) {
	// 				mark = mark + 1;
	// 			}
	// 			if (isVisited[index] === false) {
	// 				notVisited = notVisited + 1;
	// 			}
	// 		}
	// 		notAnswered = test.questions.length - answered;
	// 		return;
	// 	};

	// console.log("time", state.timeElapsed);

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
					<DialogTitle id="alert-dialog-title">
						<TimeLeft />
					</DialogTitle>
					<div style={{ padding: "10px" }}>
						<DialogTitle id="alert-dialog-title">Confirm Submit Test, are you sure?</DialogTitle>

						<DialogContent>
							{/* <div>
								<div className={classes.container}>
									<span>
										<label className={classes.showAttempted}>{answered}</label>
										<span className={classes.text}>‏‏‎Answered</span>
									</span>
									<span>
										<label className={classes.showVisited}>{notAnswered}</label>
										<span className={classes.text}>‏‏‎Not Answered</span>
									</span>
								</div>
								<div className={classes.container} style={{ marginTop: "30px" }}>
									<span>
										<label className={classes.showLabel}>{notVisited}</label>
										<span className={classes.text}>‏‏‎Not Visited</span>
									</span>
									<span style={{ marginRight: "12px" }}>
										<label className={classes.showMarked}>{mark}</label>
										‏‏‎<span className={classes.text}>‏‏‎Review Later</span>
									</span>
								</div>
							</div> */}
						</DialogContent>

						<DialogActions style={{ display: "flex", justifyContent: "space-between" }}>
							<Button
								autoFocus
								// variant="outlined"
								onClick={() => setOpenSubmitDialog(false)}
								color="secondary">
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
