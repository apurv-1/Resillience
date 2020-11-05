import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TestContext from "../Context/TestContext";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const TestResult = () => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const { test, answers, showResult } = state;
	const questions = test.questions;
	let marks = 0;

	const calculateCorrect = () => {
		console.log(questions);
		// debugger;
		// questions.map(({questionNumber,correctOption}, index)=>{
		// 	if
		// })
		// for (let outer = 0; outer < questions.length; outer++) {
		// 	for (let inner = 0; inner < answers.length; inner++) {
		// 		if (questions[outer].questionNumber === answers[inner].questionNo) {
		// 			if (questions[outer].correctOption === answers[inner].answer) {
		// 				marks = marks + 1;
		// 			}
		// 		}
		// 	}
		// }
	};

	useEffect(calculateCorrect, []);

	return (
		<div>
			<h1>Result Section</h1>
			{showResult === true && (
				<>
					<h3>
						"You Scored: "{marks}/{questions.length}
					</h3>
				</>
			)}
			{showResult === true
				? questions.map(({ questionImage, correctOption }) => {
						<Card className={classes.root}>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={questionImage}
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Correct Option: {correctOption}
								</Typography>
							</CardContent>
						</Card>;
				  })
				: "Complete the Quiz first!"}
		</div>
	);
};

export default TestResult;
