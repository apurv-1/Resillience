import React, { useState } from "react";
import {
	makeStyles,
	Paper,
	FormControl,
	Select,
	MenuItem,
	TextField,
	Button,
	Typography,
} from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddQuestions from "./AddQuestionsComponent";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		justifyContent: "center",
		margin: "10px",
	},
	testDiv: {
		marginTop: "4rem",
		width: "40rem",
		padding: "2rem",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",

		"@media only screen and (max-width: 430px)": {},
	},
	testField: {
		margin: "5px",
	},
	marksField: {
		margin: "12px",
	},
	button: {
		margin: "5px",
	},
	question: {
		margin: "0.5rem",
		fontWeight: "bolder",
	},
}));

const CreateTest = () => {
	const classes = useStyles();
	toast.configure();

	const [testId, setTestId] = useState("");
	const [testName, setTestName] = useState("");
	const [testDuration, setTestDuration] = useState("");
	const [noOfQuestions, setNoOfQuestions] = useState("");
	const [syllabus, setSyllabus] = useState("");
	const [testLevel, setTestLevel] = useState("");
	const [testType, setTestType] = useState("pcm");

	const [forCorrect, setForCorrect] = useState(0);
	const [forInCorrect, setForInCorrect] = useState(0);

	const [open, setOpen] = useState(false);
	const [check, setCheck] = useState(false);

	const SaveTest = () => {
		if (!testId || !testName || !testDuration || !noOfQuestions) {
			toast.error("Please fill all the fields..", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		} else {
			fetch("/api/createtest", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
				},
				body: JSON.stringify({
					testId,
					testName,
					testDuration,
					noOfQuestions,
					syllabus,
					testLevel,
					testType,
					forCorrect,
					forInCorrect,
				}),
			})
				.then((res) => res.json())
				.then((test) => {
					if (test.error) {
						toast.error("The Test Id exists. Try another!", {
							position: "bottom-right",
							autoClose: 4000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
						console.log(test.error);
					} else {
						toast.success(`${testName} created with Id:${testId}`, {
							position: "bottom-right",
							autoClose: 20000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
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

	const handleAddMoreQuestions = () => {
		if (!testId || !noOfQuestions) {
			toast.error("Please fill TestId & Number of Questions", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		} else {
			setCheck(true);
			toast.info(`You can add more Questions to testId: ${testId}`, {
				position: "bottom-right",
				autoClose: 6000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		}
	};

	return (
		<div>
			{check ? (
				<div className={classes.questionsDiv}>
					<AddQuestions testID={testId} totalQuestions={noOfQuestions} />
				</div>
			) : (
				<div className={classes.root}>
					<Paper className={classes.testDiv} elevation={5}>
						<Typography variant="h4">
							Create a New Test{" "}
							<span role="img" aria-label="test">
								📋🖍
							</span>
						</Typography>

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
						<div>
							<TextField
								id="questions"
								label="How many questions?"
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
						</div>
						<TextField
							id="test-syllabus"
							label="Test Syllabus"
							variant="outlined"
							className={classes.marksField}
							value={syllabus}
							type="text"
							onChange={(e) => setSyllabus(e.target.value)}
						/>
						<TextField
							id="test-level"
							label="Test Level"
							variant="outlined"
							className={classes.marksField}
							value={testLevel}
							type="text"
							onChange={(e) => setTestLevel(e.target.value)}
						/>

						<div>
							<TextField
								id="number"
								label="For Correct"
								variant="outlined"
								className={classes.marksField}
								value={forCorrect}
								type="number"
								onChange={(e) => setForCorrect(e.target.value)}
							/>
							<TextField
								id="number"
								label="For InCorrect"
								variant="outlined"
								className={classes.marksField}
								value={forInCorrect}
								type="number"
								onChange={(e) => setForInCorrect(e.target.value)}
							/>
						</div>
						<div className={classes.testField}>
							<FormControl className={classes.testField}>
								<Select
									labelId="controlled-open-select-label"
									variant="outlined"
									open={open}
									onClose={() => setOpen(false)}
									onOpen={() => setOpen(true)}
									value={testType}
									onChange={(e) => setTestType(e.target.value)}
									fullWidth>
									<MenuItem value={"pcm"}>Physics, Chemistry, Maths</MenuItem>
									<MenuItem value={"pcb"}>Physics, Chemistry, Biology</MenuItem>
								</Select>
							</FormControl>
						</div>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							startIcon={<SaveIcon />}
							onClick={() => SaveTest()}>
							Save Test
						</Button>
						<Typography variant="inherit" color="primary" className={classes.question}>
							Add more{" "}
							<span
								onClick={() => handleAddMoreQuestions()}
								style={{ color: "#0F7DC2", cursor: "pointer" }}>
								Questions?
							</span>
						</Typography>
					</Paper>
				</div>
			)}
		</div>
	);
};

export default CreateTest;
