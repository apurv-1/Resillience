import React, { useContext, useState } from "react";
import TestContext from "../Context/TestContext";
import { makeStyles, Paper, Checkbox, Fab } from "@material-ui/core";
import { SET_STARTED } from "../Reducers/types";

const useStyles = makeStyles({
	root: {
		// margin: "20px",
		marginTop: "3rem",
		padding: "2rem",
	},
	main: {
		padding: "40px",
	},
	li: {
		padding: "15px",
	},
	button: {
		cursor: "pointer",
		padding: "5px 15px",
		fontWeight: "bold",
		alignContent: "center",
		backgroundColor: "#0F7DC2",
		width: "10rem",
		// color: "#F8F8F8",
	},
});

const StartPage = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test } = state;

	const [checked, setChecked] = useState(false);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
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
							<li className={classes.li}>
								Total duration of this test is <b>{Duration}</b> minutes.
							</li>
							<li className={classes.li}>
								There will be <b>{test.questions.length} Single Option Correct MCQ questions</b> in this
								test.
							</li>
							{test.testType === "pcb" ? (
								<li className={classes.li}>
									There are <b>{test.questions.length}</b> in the question paper consisting of Physics,
									Chemistry and Biology.
								</li>
							) : (
								<li className={classes.li}>
									There are <b>{test.questions.length}</b> in the question paper consisting of Physics,
									Chemistry and Mathematics.
								</li>
							)}
							<li className={classes.li}>
								Each question is allotted <b>{test.forCorrect} marks </b>for correct response.
							</li>
							<li className={classes.li}>
								<b>{test.forInCorrect} mark</b> will be deducted for indicating incorrect response for each
								question.
							</li>
							<li className={classes.li}>
								<b>No deduction</b> from the total score will be made if no response is indicated.
							</li>
							<li className={classes.li}>
								Please use ONE device, browser and tab while taking this test. As an anti-cheating measure,
								switching between tabs, browsers or devices will result in loss of your test data.
							</li>
						</ol>
						<Checkbox checked={checked} onClick={handleChange} />I have read and understood the
						instructions.
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Fab
							disabled={checked === false}
							onClick={() => handleStartTest()}
							className={classes.button}>
							Start Test
						</Fab>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default StartPage;
