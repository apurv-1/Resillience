import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddQuestions from "./AddQuestionsComponent";
// +import ShowTest from "./ShowTestComponent";

const useStyles = makeStyles(() => ({
	root: {},
	testDiv: {
		marginTop: "6%",
		marginLeft: "20%",
		marginRight: "20%",
		paddingLeft: "10%",
		paddingRight: "10%",
	},
	paper: {
		padding: "5%",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
	},
	testField: {
		margin: "5px",
	},
	button: {
		margin: "20px",
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
	const [forCorrect, setForCorrect] = useState(0);
	const [forInCorrect, setForInCorrect] = useState(0);
	// const [error, setError] = useState("");
	const [check, setCheck] = useState(false);

	const SaveTest = () => {
		if (!testId || !testName || !testDuration || !noOfQuestions) {
			toast.error("Please Fill all the fields..", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		} else {
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
					forCorrect,
					forInCorrect,
				}),
			})
				.then((res) => res.json())
				.then((test) => {
					if (test.error) {
						console.log(test.error);
						// console.log(testId);

						toast.error("The Test Id exists. Try another!", {
							position: "bottom-right",
							autoClose: 4000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
					} else {
						console.log("Test Created!");
						setCheck(true);
					}
				})
				.catch((err) => {
					console.log(err);
					toast.error(err, {
						position: "bottom-right",
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
					});
				});
		}
	};

	return (
		<div className={classes.root}>
			{check ? (
				<div>
					<div className={classes.questionsDiv}>
						<AddQuestions testID={testId} totalQuestions={noOfQuestions} />
					</div>
				</div>
			) : (
				<div className={classes.testDiv}>
					<Paper elevation={5} className={classes.paper}>
						<h1>Create Test</h1>
						<TextField
							id="test-id"
							label="Test Id"
							variant="outlined"
							className={classes.testField}
							value={testId}
							type="number"
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
							type="number"
							onChange={(e) => setNoOfQuestions(e.target.value)}
						/>
						<TextField
							id="test-duration"
							label="Test Duration (mins)"
							variant="outlined"
							className={classes.testField}
							value={testDuration}
							type="number"
							onChange={(e) => setTestDuration(e.target.value)}
						/>
						<TextField
							id="test-duration"
							label="For Correct"
							variant="outlined"
							className={classes.testField}
							value={forCorrect}
							type="number"
							onChange={(e) => setForCorrect(e.target.value)}
						/>
						<TextField
							id="test-duration"
							label="For InCorrect"
							variant="outlined"
							className={classes.testField}
							value={forInCorrect}
							type="number"
							onChange={(e) => setForInCorrect(e.target.value)}
						/>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							startIcon={<SaveIcon />}
							onClick={() => SaveTest()}>
							Save Test
						</Button>
					</Paper>
				</div>
			)}
		</div>
	);
};

export default CreateTest;
