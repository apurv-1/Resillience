import React, { useContext } from "react";
// import TestContext from "../../Context/TestContext";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		margin: "5%",
		padding: "5%",
	},
	main: {
		padding: "5%",
	},
});

const CorrectQuestion = () => {
	const classes = useStyles();
	// const { state } = useContext(TestContext);
	// const { test, selectedAnswers, timeElapsed } = state;
	// const questions = test.questions;

	return (
		<div className={classes.root}>
			<Paper elevation={4}>
				<div className={classes.main}>
					<h1>Instructions </h1>
					<div>
						<ol type="1" start="1">
							<li>
								Total duration of this test is <b>{}</b>
							</li>
							<li>
								There will be only <b>{}</b> in this test.
							</li>
							<li>
								There are <b>{}</b> in the question paper consisting of Physics, Chemistry and Mathematics
								having <b>{}</b> in each section.
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
				</div>
			</Paper>
		</div>
	);
};

export default CorrectQuestion;
