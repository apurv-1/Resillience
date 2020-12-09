import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
	makeStyles,
	Paper,
	Button,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	TextField,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableCell,
	TableRow,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	card: {
		margin: "6%",
		display: "absolute",
		height: "50%",
		width: "40%",
	},
	textField: {
		height: "10px",
		maxWidth: "50px",
	},
	paper: {
		flexDirection: "column",
		padding: "2% 4% 4%",
		textAlign: "center",
		justifyContent: "center",
	},
	container: {
		alignSelf: "stretch",
		padding: "3% 3% 3%",
		width: "80%",
		height: "80%",
		marginLeft: "5%",
	},
	input: {
		display: "none",
	},
	numerical: {
		width: "50%",
	},
	button: {
		padding: "2%",
	},
	formControl: {
		width: "45%",
		margin: "2%",
		height: "100%",
	},
	cropContainer12: {
		height: "100%",
	},
	cropContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "space-around",
		margin: "2px",
	},
	showImage: {
		maxWidth: "100%",
		maxHeight: "100%",
	},
	croppedQuestion: {
		minWidth: "500px",
		minHeight: "500px",
	},
	viewQuesion: {
		display: "flex",
		float: "right",
	},
}));

const AddQuestions = ({ testID, totalQuestions }) => {
	const classes = useStyles();
	const history = useHistory();
	const [openSubject, setOpenSubject] = useState(false);
	const [openCorrect, setOpenCorrect] = useState(false);
	const [openQuesType, setOpenQuesType] = useState(false);
	const [openDiffType, setOpenDiffType] = useState(false);

	const [subject, setSubject] = useState("");
	const [questionType, setQuestionType] = useState("singleCorrect");

	const [correct, setCorrect] = useState("");
	const [numerical, setNumerical] = useState("");
	const [difficuilty, setDifficuilty] = useState("");

	const [questionNumber, setQuestionNumber] = useState(1);
	const [questionImg, setQuestionImg] = useState("");
	const [questionUrl, setQuestionUrl] = useState("");

	// const [error, setError] = useState("");

	console.log("total ", totalQuestions);
	/* eslint-disable */
	useEffect(() => {
		if (questionType === "singleCorrect" && questionUrl) {
			fetch("/add-question", {
				method: "put",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					testId: testID,
					questionNumber: questionNumber,
					questionImage: questionUrl,
					correctOption: correct,
					subject: subject,
					difficuilty: difficuilty,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						console.log(data.error);
					} else {
						console.log("question saved");
						setQuestionNumber(1 + questionNumber);
						setCorrect("");
						setQuestionImg("");
						setQuestionUrl("");
						setDifficuilty("");
						// setQuestionSrc("");
						// setFinalQuestion("");
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log("Please select valid Question Type!");
		}
	}, [questionUrl]);

	// useEffect(() => pushQuestion(), [questionUrl]);
	console.log("question no. ", questionNumber);

	const uploadQuestion = () => {
		// console.log(questionImg);
		if (questionNumber === totalQuestions) {
			console.log("question no. ", questionNumber);
			alert(`${totalQuestions} of questions added!`);
			history.push("/createtest");
		} else if (!questionNumber || !questionType || !questionImg || !subject || !correct) {
			// console.log("Please Fill all the details");
			alert("Please Fill all the details");
			// setError("Please Fill all the details");
		} else {
			const data = new FormData();
			data.append("file", questionImg);
			data.append("upload_preset", "question");
			data.append("cloud_name", "rweb1");
			fetch("https://api.cloudinary.com/v1_1/rweb1/image/upload", {
				method: "post",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					setQuestionUrl(data.secure_url);
					console.log("Processing...");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const handleImageChange = (e) => {
		setQuestionImg(e.target.files[0]);
	};

	return (
		<div className={classes.card}>
			{/* {error ? (
				<Alert severity="error" color="error">
					{error}
				</Alert>
			) : (
				""
			)} */}
			<div className={classes.viewQuesion}>
				<TableContainer component={Paper} elevation={4}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow component="th">
								<TableCell style={{ fontSize: "20px", fontWeight: "bolder" }}>Question Number:</TableCell>
								<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bolder" }}>
									Question Image
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bold" }}>
									{questionNumber}
								</TableCell>
								<TableCell>{questionUrl && <img src={questionUrl} alt="question" />}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div>
				<Paper elevation={5} className={classes.paper}>
					<div className={classes.form}>
						<h1>Add Questions to testID: {testID}</h1>
						<Divider />
						<div className={classes.container}>
							<TextField
								id="question-number"
								label="Question Number"
								variant="outlined"
								// className={classes.input}
								value={questionNumber}
								type="number"
								fullWidth
								onChange={(e) => setQuestionNumber(e.target.value)}
							/>
						</div>
						<Divider />
						<div className={classes.container}>
							<FormControl className={classes.formControl}>
								<InputLabel>Select Question Type</InputLabel>
								<Select
									labelId="controlled-open-select-label"
									open={openQuesType}
									onClose={() => setOpenQuesType(false)}
									onOpen={() => setOpenQuesType(true)}
									value={questionType}
									onChange={(e) => setQuestionType(e.target.value)}
									fullWidth>
									<MenuItem value={"singleCorrect"}>Single Correct</MenuItem>
									<MenuItem value={"multipleCorrect"}>Multiple Correct</MenuItem>
									<MenuItem value={"numerical"}>Numerical</MenuItem>
								</Select>
							</FormControl>
							<FormControl className={classes.formControl}>
								<InputLabel>Subject</InputLabel>
								<Select
									labelId="controlled-open-select-label"
									open={openSubject}
									onClose={() => setOpenSubject(false)}
									onOpen={() => setOpenSubject(true)}
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									// fullWidth
								>
									<MenuItem value={"Physics"}>Physics</MenuItem>
									<MenuItem value={"Chemistry"}>Chemistry</MenuItem>
									<MenuItem value={"Maths"}>Maths</MenuItem>
									<MenuItem value={"Biology"}>Bio</MenuItem>
								</Select>
							</FormControl>
						</div>
						<Divider />
						<div className={classes.container}>
							<input
								accept="image/*"
								className={classes.input}
								id="contained-button-file"
								multiple
								type="file"
								onChange={handleImageChange}
							/>
							<label htmlFor="contained-button-file">
								<Button
									variant="contained"
									color="primary"
									component="span"
									className={classes.button}
									startIcon={<CloudUploadIcon />}
									fullWidth>
									Upload Question
								</Button>
							</label>
						</div>
						<Divider />
						{questionType === "singleCorrect" ? (
							<div className={classes.container}>
								<FormControl className={classes.formControl}>
									<InputLabel>Select Difficuilty</InputLabel>
									<Select
										labelId="controlled-open-select-label"
										open={openDiffType}
										onClose={() => setOpenDiffType(false)}
										onOpen={() => setOpenDiffType(true)}
										value={difficuilty}
										onChange={(e) => setDifficuilty(e.target.value)}
										// fullWidth
									>
										<MenuItem value={"easy"}>Easy</MenuItem>
										<MenuItem value={"medium"}>Medium</MenuItem>
										<MenuItem value={"hard"}>Hard</MenuItem>
									</Select>
								</FormControl>
								<FormControl className={classes.formControl}>
									<InputLabel>Correct Option</InputLabel>
									<Select
										labelId="controlled-open-select-label"
										open={openCorrect}
										onClose={() => setOpenCorrect(false)}
										onOpen={() => setOpenCorrect(true)}
										value={correct}
										onChange={(e) => setCorrect(e.target.value)}
										fullWidth>
										<MenuItem value={"a"}>A</MenuItem>
										<MenuItem value={"b"}>B</MenuItem>
										<MenuItem value={"c"}>C</MenuItem>
										<MenuItem value={"d"}>D</MenuItem>
									</Select>
								</FormControl>
							</div>
						) : questionType === "multipleCorrect" ? (
							<FormControl className={classes.formControl}>
								<InputLabel>Subject</InputLabel>
								<Select
									labelId="controlled-open-select-label"
									open={openSubject}
									onClose={() => setOpenSubject(false)}
									onOpen={() => setOpenSubject(true)}
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									// fullWidth
								>
									<MenuItem value={"Physics"}>Physics</MenuItem>
									<MenuItem value={"Chemistry"}>Chemistry</MenuItem>
									<MenuItem value={"Maths"}>Maths</MenuItem>
									<MenuItem value={"Biology"}>Bio</MenuItem>
								</Select>
							</FormControl>
						) : (
							<div className={classes.container}>
								<FormControl className={classes.formControl}>
									<InputLabel>Subject</InputLabel>
									<Select
										labelId="controlled-open-select-label"
										open={openSubject}
										onClose={() => setOpenSubject(false)}
										onOpen={() => setOpenSubject(true)}
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
										// fullWidth
									>
										<MenuItem value={"Physics"}>Physics</MenuItem>
										<MenuItem value={"Chemistry"}>Chemistry</MenuItem>
										<MenuItem value={"Maths"}>Maths</MenuItem>
										<MenuItem value={"Biology"}>Bio</MenuItem>
									</Select>
								</FormControl>
								<TextField
									id="question-number"
									label="Numerical Answer"
									variant="outlined"
									className={classes.numerical}
									type="number"
									value={numerical}
									onChange={(e) => setNumerical(e.target.value)}
								/>
							</div>
						)}

						<Divider />
						<div className={classes.container}>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								startIcon={<SaveIcon />}
								onClick={() => uploadQuestion()}
								fullWidth>
								Save Question
							</Button>
						</div>
					</div>
				</Paper>
			</div>
		</div>
	);
};

export default AddQuestions;
