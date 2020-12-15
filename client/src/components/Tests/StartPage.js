import React, { useContext } from "react";
import TestContext from "../Context/TestContext";
import { makeStyles, Paper } from "@material-ui/core";
import { SET_STARTED } from "../Reducers/types";

const useStyles = makeStyles({
	root: {
		margin: "5%",
		padding: "5%",
	},
	main: {
		padding: "5%",
	},
});

const StartPage = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test } = state;
	// const questions = test.questions;
	const handleStartTest = () => {
		console.log(state.isStarted);
		dispatch({ type: SET_STARTED, isStarted: true });
	};
	let Duration = test.testDuration / 60000;

	return (
		<div className={classes.root}>
			<Paper elevation={4}>
				<div className={classes.main}>
					<h1>Instructions </h1>
					<div>
						<ol type="1" start="1">
							<li>
								Total duration of this test is <b>{Duration}</b> minutes.
							</li>
							<li>
								There will be only <b>{}</b> in this test.
							</li>
							<li>
								There are <b>{test.questions.length}</b> in the question paper consisting of Physics,
								Chemistry and Mathematics having <b>{}</b> in each section.
							</li>
							<li>
								Please use ONE device, browser and tab while taking this test. As an anti-cheating measure,
								switching between tabs, browsers or devices will result in loss of your test data.
							</li>
							<li>
								Total duration of this test is <b>{}</b>
							</li>
							<li>
								Total duration of this test is <b>{}</b>
							</li>
						</ol>
						I have read and understood the instructions.
					</div>
					<button onClick={() => handleStartTest()}>Start Test</button>
				</div>
			</Paper>
		</div>
	);
};

export default StartPage;
