import React, { useState, useReducer, useContext } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TestContext from "../Context/TestContext";
import {
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_ANSWERS,
	SET_SHOW_RESULTS,
} from "../Reducers/types";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	buttonContainer: {
		padding: "1%",
		// backfaceVisibility: "hidden",
	},
	button: {
		margin: "2.5%",
		caretColor: "#0089FF",
	},

	toast: {
		width: "100%",
		textAlign: "center",
		"& > * + *": {
			marginTop: "5px",
		},
	},
}));
const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: blue,
	},
});

const KeysComponent = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test, currentIndex, currentAnswer, correctOption, answers, showResult } = state;
	const questionLength = state.test.questions.length;

	const next = () => {
		// console.log(currentAnswer);
		console.log(answers);
		// debugger;
		answers.push(currentAnswer);
		dispatch({ type: SET_ANSWERS, answers: answers });
		dispatch({ type: SET_CURRENT_ANSWER, currectOption: "" });

		if (currentIndex + 1 < test.questions.length) {
			dispatch({
				type: SET_CURRENT_INDEX,
				currentIndex: currentIndex + 1,
			});
			return;
		}
	};

	const previous = () => {
		dispatch({
			type: SET_CURRENT_INDEX,
			currentIndex: currentIndex - 1,
		});
		return;
	};

	return (
		<div className={classes.buttonContainer}>
			<ThemeProvider theme={theme}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					style={{ marginLeft: "-10px" }}>
					End Test
				</Button>
				{currentIndex === 0 ? (
					<Button variant="contained" color="primary" className={classes.button} disabled>
						Previous Question
					</Button>
				) : (
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						onClick={() => previous()}>
						Previous Question
					</Button>
				)}

				<Button variant="contained" color="secondary" className={classes.button}>
					Mark for Review
				</Button>

				{currentIndex === questionLength - 1 ? (
					<Button variant="contained" color="secondary" className={classes.button} disabled>
						Next Question
					</Button>
				) : (
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						onClick={() => next()}>
						Next Question
					</Button>
				)}
				<Button variant="contained" color="secondary" className={classes.button}>
					Submit Test
				</Button>
			</ThemeProvider>
		</div>
	);
};

export default KeysComponent;
