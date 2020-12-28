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
		margin: "5px",
	},
	dropText: {
		marginTop: "200px",
		paddingTop: "20px",
	},
}));

const CreateTest = () => {
	const classes = useStyles();
	toast.configure();

	const [testId, setTestId] = useState("");
	const [testName, setTestName] = useState("");
	const [testDuration, setTestDuration] = useState("");
	const [noOfQuestions, setNoOfQuestions] = useState("");
	const [testType, setTestType] = useState("pcm");

	const [forCorrect, setForCorrect] = useState(0);
	const [forInCorrect, setForInCorrect] = useState(0);

	const [open, setOpen] = useState("");
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
						<Typography variant="h4">Create Test</Typography>

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
					</Paper>
				</div>
			)}
		</div>
	);
};

export default CreateTest;
