import React, { useContext, useState } from "react";
import TestContext from "../Context/TestContext";
import UserContext from "../Context/UserContext";
import { makeStyles, Paper, Checkbox, Fab } from "@material-ui/core";
import { SET_STARTED } from "../Reducers/types";

const useStyles = makeStyles({
	root: {
		marginTop: "3rem",
		padding: "2rem",
		marginBottom: "-10rem",
	},
	main: {
		padding: "40px",
	},
	li: {
		padding: "12px",
	},
});

const StartPage = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { userState } = useContext(UserContext);
	const { test } = state;
	const [attemptedTests] = userState.payload.attemptedTests;
	const [checked, setChecked] = useState(false);
	var flag = true;

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	const AttemptedTest = () => {
		for (let index = 0; index < attemptedTests.length; index++) {
			// console.log(attemptedTests[index]);
			if (attemptedTests[index] === test._id) {
				flag = false;
				break;
			}
		}
		if (flag === true) {
			fetch("/attempted-test", {
				method: "put",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("student_jwt"),
				},
				body: JSON.stringify({
					id: test._id,
				}),
			}).catch((err) => {
				console.log(err);
			});
		} else {
			// console.log("hello");
			console.log(flag);
		}
	};
	// console.log(test._id);
	const handleStartTest = () => {
		AttemptedTest();
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
									There are <b>{test.questions.length} Questions</b> in the question paper consisting of{" "}
									<b>Physics, Chemistry and Biology.</b>
								</li>
							) : (
								<li className={classes.li}>
									There are <b>{test.questions.length} Questions</b> in the question paper consisting of{" "}
									<b>Physics, Chemistry and Mathematics.</b>
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
							color="primary"
							size="medium"
							disabled={checked === false}
							onClick={() => handleStartTest()}
							variant="extended">
							Start Test
						</Fab>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default StartPage;
