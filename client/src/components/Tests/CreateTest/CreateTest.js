import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import AddQuestions from "./AddQuestionsComponent";
import ShowTest from "./ShowTestComponent";

const useStyles = makeStyles(() => ({
	root: {
		marginTop: "5%",
		margin: "2%",
		padding: "6%",
	},
	// questionsDiv:{
	//     margin: "2px"
	// },
	testDiv: {
		// display: "flex",
	},
	paper: {
		padding: "2%",
		textAlign: "center",
	},
	testField: {
		marginLeft: "20px",
		height: "10px",
	},
	button: {
		marginLeft: "20px",
		height: "55px",
	},
	showtest: {
		marginTop: "5%",
		marginBottom: "-10%",
	},
}));

const CreateTest = () => {
	const classes = useStyles();

	const [testId, setTestId] = useState("");
	const [testName, setTestName] = useState("");
	const [testDuration, setTestDuration] = useState("");
	const [noOfQuestions, setNoOfQuestions] = useState("");
	const [check, setCheck] = useState(false);

	const SaveTest = () => {
		fetch("/addtest", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				testId,
				testName,
				testDuration,
				noOfQuestions,
			}),
		})
			.then((res) => res.json())
			.then((test) => {
				if (test.error) {
					console.log(test.error);
				} else {
					console.log("Test Created!");
					setCheck(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className={classes.root}>
			{check ? (
				<div>
					<div className={classes.questionsDiv}>
						<AddQuestions testID={testId} />
					</div>
					<div className={classes.showtest}>
						<ShowTest testId={testId} />
					</div>
				</div>
			) : (
				<div className={classes.testDiv}>
					<Paper elevation={5} className={classes.paper}>
						<TextField
							id="test-id"
							label="Test Id"
							variant="outlined"
							className={classes.textField}
							value={testId}
							onChange={(e) => setTestId(e.target.value)}
						/>
						<TextField
							id="test-name"
							label="Test Name"
							variant="outlined"
							className={classes.testField}
							value={testName}
							onChange={(e) => setTestName(e.target.value)}
						/>
						<TextField
							id="questions"
							label="How many Questions"
							variant="outlined"
							className={classes.testField}
							value={noOfQuestions}
							onChange={(e) => setNoOfQuestions(e.target.value)}
						/>
						<TextField
							id="test-duration"
							label="Test Duration (mins)"
							variant="outlined"
							className={classes.testField}
							value={testDuration}
							onChange={(e) => setTestDuration(e.target.value)}
						/>
						<Button variant="contained" color="primary" className={classes.button} startIcon={<SaveIcon />} onClick={() => SaveTest()}>
							Save Test
						</Button>
					</Paper>
				</div>
			)}
		</div>
	);
};

export default CreateTest;
