import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TestContext from "../Context/TestContext";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "5%",
		marginLeft: "20%",
		// textAlign: "center",
	},
	card: {
		maxWidth: "80%",
	},
}));

const TestResult = () => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const { test, showResult, selectedAnswers, timeElapsed } = state;
	const questions = test.questions;
	let marks = 0;

	const calculateMarks = () => {
		questions.map(({ correctOption }, index) => {
			if (correctOption === selectedAnswers[index]) {
				marks = marks + 1;
			}
		});
	};

	return (
		<div className={classes.root}>
			<h1>Result Section</h1>
			{showResult === true && (
				<>
					{calculateMarks()}
					<h3>
						You Scored: "{marks}/{questions.length}"
					</h3>
				</>
			)}
			{showResult === true
				? questions.map(({ questionImage, correctOption }, index) => (
						<Card className={classes.card}>
							<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
							<Typography gutterBottom variant="h6" component="h6">
								Question Number: {test.questions[index].questionNumber}
							</Typography>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								// height="140"
								image={questionImage}
								// title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h6">
									Correct Option: {correctOption}
									<br />
									Selected Option: {selectedAnswers[index]}
									<br />
									Time Taken: {timeElapsed[index]}s
								</Typography>
							</CardContent>
							<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
						</Card>
				  ))
				: "Complete the Quiz first!"}
		</div>
	);
};

export default TestResult;
