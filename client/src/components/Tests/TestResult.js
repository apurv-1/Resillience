import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TestContext from "../Context/TestContext";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "20%",
	},
}));

const TestResult = () => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const { test, showResult, marks } = state;
	const questions = test.questions;

	return (
		<div>
			<h1>Result Section</h1>
			{showResult === true && (
				<>
					<h3>
						You Scored: "{marks}/{questions.length}"
					</h3>
				</>
			)}
			{showResult === true
				? questions.map(({ questionImage, correctOption }) => (
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
						</Card>
				  ))
				: "Complete the Quiz first!"}
		</div>
	);
};

export default TestResult;
