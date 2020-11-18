import React, { useContext } from "react";
import TestContext from "../Context/TestContext";
import {
	makeStyles,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Grid,
	Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "5%",
		marginLeft: "20%",
		// textAlign: "center",
	},
	card: {
		maxWidth: "80%",
	},
	grid: {
		display: "flex",
		flexDirection: "row",
		borderColor: "blue",
	},
	paper: {
		margin: "2%",
		padding: "4%",
		textAlign: "center",
		border: "4px solid",
		borderColor: "grey",
		borderRadius: "25px",
	},
	correctPaper: {
		margin: "2%",
		padding: "4%",
		textAlign: "center",
		border: "4px solid",
		borderColor: "green",
		borderRadius: "25px",
	},
	WorngPaper: {
		margin: "2%",
		padding: "4%",
		textAlign: "center",
		border: "4px solid",
		borderColor: "red",
		borderRadius: "25px",
	},
}));

const TestResult = () => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const { test, showResult, selectedAnswers, timeElapsed } = state;
	const questions = test.questions;
	let marks = 0,
		score = 0,
		total = questions.length;

	const calculateMarks = () => {
		questions.forEach(({ correctOption }, index) => {
			if (correctOption === selectedAnswers[index]) {
				marks = marks + 1;
			}
		});
		calculateScore();
		return;
	};
	const calculateScore = () => {
		// console.log(marks, total);
		score = marks * 4 - (total - marks);
		return;
	};

	return (
		<div className={classes.root}>
			<h1>Result Section</h1>
			{showResult === true && (
				<>
					{calculateMarks()}
					{/* <h3>
						<Paper elevation={2} style={{ width: "auto" }}>
							You Scored: {score}/{4 * total}
						</Paper>
					</h3> */}
					<div>
						<Grid className={classes.grid}>
							<Paper className={classes.paper} elevation={5} square={true}>
								<h2>Total Questions</h2>
								<h1>{questions.length}</h1>
							</Paper>

							<Paper className={classes.correctPaper} elevation={5} square={true}>
								<h2>Correct </h2>
								<h1>{marks}</h1>
							</Paper>

							<Paper className={classes.WorngPaper} elevation={5} square={true}>
								<h2>Wrong </h2>
								<h1>{questions.length - marks}</h1>
							</Paper>
							<Paper className={classes.paper} elevation={5} square={true}>
								<h2>You Scored </h2>
								<h1>
									{score}/{4 * total}
								</h1>
							</Paper>
						</Grid>
					</div>
				</>
			)}
			{showResult === true
				? questions.map(({ questionImage, correctOption, _id }, index) => (
						<Card className={classes.card} key={_id}>
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
								<Typography gutterBottom component="h6">
									Correct Option: {correctOption}
									<br />
									Selected Option: {selectedAnswers[index] ? selectedAnswers[index] : "Not Selected"}
									<br />
									Time Taken: {timeElapsed[index] ? timeElapsed[index] : 0}s
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
