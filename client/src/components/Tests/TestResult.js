import React, { useContext, useState } from "react";
import TestContext from "../Context/TestContext";
import {
	makeStyles,
	Typography,
	Grid,
	Paper,
	FormControl,
	Select,
	MenuItem,
} from "@material-ui/core";
// import Loading from "./Loading"
import Confetti from "react-confetti";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "5%",
		marginLeft: "20%",
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
	analysisBlock: {
		margin: "3%",
		padding: "4%",
		width: "60%",
		// border: "2px solid",
	},
	analysisDropdown: {
		width: "40%",
		height: "100%",
		marginLeft: "2%",
		marginTop: "-2.5%",
		// padding: "5%",
	},
}));

const TestResult = () => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const [open, setOpen] = useState(false);
	const [type, setType] = useState("");
	const { test, showResult, selectedAnswers, timeElapsed } = state;
	const questions = test.questions;

	const timePerQuestion = test.testDuration / (questions.length * 1000);
	// console.log(timePerQuestion);
	let score = 0,
		total = questions.length,
		// attempted = 0,
		correct = 0,
		wrong = 0;

	const calculateMarks = () => {
		questions.forEach(({ correctOption }, index) => {
			if (selectedAnswers[index]) {
				correctOption === selectedAnswers[index] ? (correct = correct + 1) : (wrong = wrong + 1);
			}
		});
		calculateScore();
		return;
	};

	const calculateScore = () => {
		score = correct * 4 - wrong;
		return;
	};

	return (
		<div className={classes.root}>
			<h1>Result Section</h1>

			{showResult === true && (
				<>
					<Confetti numberOfPieces={50} />
					{calculateMarks()}
					<div>
						<Grid className={classes.grid}>
							<Paper className={classes.paper} elevation={5} square={true}>
								<h2>Total Questions</h2>
								<h1>{questions.length}</h1>
							</Paper>

							<Paper className={classes.correctPaper} elevation={5} square={true}>
								<h2>Correct </h2>
								<h1>{correct}</h1>
							</Paper>

							<Paper className={classes.WorngPaper} elevation={5} square={true}>
								<h2>Wrong </h2>
								<h1>{wrong}</h1>
							</Paper>
							<Paper className={classes.paper} elevation={5} square={true}>
								<h2>You Scored </h2>
								<h1>
									{score}/{4 * total}
								</h1>
							</Paper>
						</Grid>
					</div>

					<div className={classes.analysisBlock}>
						<h3>
							Choose Test Analysis :
							<FormControl className={classes.analysisDropdown}>
								{/* <InputLabel>Select Question Type</InputLabel> */}
								<Select
									// labelId="controlled-open-select-label"
									variant="outlined"
									open={open}
									onClose={() => setOpen(false)}
									onOpen={() => setOpen(true)}
									value={type}
									onChange={(e) => setType(e.target.value)}
									fullWidth>
									<MenuItem value={""}>None</MenuItem>
									<MenuItem value={"correct"}>Correct</MenuItem>
									<MenuItem value={"incorrect"}>Incorrect</MenuItem>
									<MenuItem value={"notAnswered"}>Not Answered</MenuItem>
									<MenuItem value={"all"}>All</MenuItem>
								</Select>
							</FormControl>
						</h3>
					</div>
				</>
			)}
			{console.log(selectedAnswers)}
			{showResult === true
				? type === "correct"
					? questions.map(
							({ questionImage, correctOption, _id, difficuilty }, index) =>
								selectedAnswers[index] === correctOption && (
									<Paper className={classes.card} key={_id}>
										<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
										<Typography gutterBottom variant="h6" component="h6">
											Question Number: {test.questions[index].questionNumber}
										</Typography>
										<img src={questionImage} alt={_id} />
										{difficuilty}
										<Typography gutterBottom component="h6">
											Correct Option: {correctOption}
											<br />
											Selected Option: {selectedAnswers[index] ? selectedAnswers[index] : "Not Selected"}
											<br />
											<label>
												Time Taken: {timeElapsed[index] ? timeElapsed[index] : 0}s / {timePerQuestion}s
											</label>
										</Typography>

										<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
									</Paper>
								)
					  )
					: type === "incorrect"
					? questions.map(
							({ questionImage, correctOption, _id, difficuilty }, index) =>
								selectedAnswers[index] !== correctOption && (
									<Paper className={classes.card} key={_id}>
										<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
										<Typography gutterBottom variant="h6" component="h6">
											Question Number: {test.questions[index].questionNumber}
										</Typography>
										<img src={questionImage} alt={_id} />
										{difficuilty}
										<Typography gutterBottom component="h6">
											Correct Option: {correctOption}
											<br />
											Selected Option: {selectedAnswers[index] ? selectedAnswers[index] : "Not Selected"}
											<br />
											Time Taken: {timeElapsed[index] ? timeElapsed[index] : 0}s /{timePerQuestion}s
										</Typography>

										<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
									</Paper>
								)
					  )
					: type === "notAnswered"
					? questions.map(
							({ questionImage, correctOption, _id, difficuilty }, index) =>
								!selectedAnswers[index] && (
									<Paper className={classes.card} key={_id}>
										<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
										<Typography gutterBottom variant="h6" component="h6">
											Question Number: {test.questions[index].questionNumber}
										</Typography>
										<img src={questionImage} alt={_id} />
										{difficuilty}
										<Typography gutterBottom component="h6">
											Correct Option: {correctOption}
											<br />
											Selected Option: {selectedAnswers[index] ? selectedAnswers[index] : "Not Selected"}
											<br />
											Time Taken: {timeElapsed[index] ? timeElapsed[index] : 0}s /{timePerQuestion}s
										</Typography>

										<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
									</Paper>
								)
					  )
					: type === "all" &&
					  questions.map(({ questionImage, correctOption, _id, difficuilty }, index) => (
							<Paper className={classes.card} key={_id}>
								<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
								<Typography gutterBottom variant="h6" component="h6">
									Question Number: {test.questions[index].questionNumber}
								</Typography>
								<img src={questionImage} alt={_id} />
								{difficuilty}
								<Typography gutterBottom component="h6">
									Correct Option: {correctOption}
									<br />
									Selected Option: {selectedAnswers[index] ? selectedAnswers[index] : "Not Selected"}
									<br />
									<label>
										Time Taken: {timeElapsed[index] ? timeElapsed[index] : 0}s /{timePerQuestion}s
									</label>
								</Typography>

								<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
							</Paper>
					  ))
				: "Complete the Quiz first!"}
		</div>
	);
};

export default TestResult;
