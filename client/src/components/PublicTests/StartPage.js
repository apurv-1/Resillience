import React, { useContext, useState } from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import TestContext from "../Context/TestContext";
import { makeStyles, Paper, Checkbox, Fab } from "@material-ui/core";
import { SET_STARTED } from "../Reducers/types";

const useStyles = makeStyles({
	root: {
		marginTop: "3rem",
		padding: "2rem",
		marginBottom: "0%",
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
	const { test } = state;
	const [checked, setChecked] = useState(false);
	let Duration = test.testDuration / 60000;

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	// console.log(test._id);
	const handleStartTest = () => {
		dispatch({ type: SET_STARTED, isStarted: true });
	};

	const MediaQueryReporter = () => {
		const isSmall = useMediaQuery("(max-width: 700px)");

		return <div>{isSmall ? window.alert("Please use Desktop mode for better view!") : ""}</div>;
	};

	return (
		<div className={classes.root}>
			<MediaQueryReporter />
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
