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
import Divider from "@material-ui/core/Divider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
	card: {
		marginTop: "5rem",
		margin: "2rem",
	},
	textField: {
		height: "10px",
	},
	paper: {
		flexDirection: "column",
		padding: "10px 15px 15px",
		textAlign: "center",
		justifyContent: "center",
		width: "35rem",
	},
	container: {
		padding: "20px 20px 20px",
	},
	numerical: {
		width: "250px",
	},
	button: {
		padding: "10px",
	},
	formControl: {
		width: "15rem",
		margin: "0.5rem",
	},
	viewQuesion: {
		display: "flex",
		float: "right",
		width: "52rem",
	},
	table: {
		textAlign: "center",
	},
}));

const AddQuestions = ({ testID, totalQuestions }) => {
	const classes = useStyles();
	toast.configure();
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
	const [questionPreview, setQuestionPreview] = useState("");

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
					Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
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
						toast.error(data.error, {
							position: "bottom-right",
							autoClose: 4000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
					} else {
						toast.success(`Q.No: ${questionNumber} added to testId: ${testID}`, {
							position: "bottom-right",
							autoClose: 10000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: false,
						});
						setQuestionNumber(1 + questionNumber);
						setCorrect("");
						setQuestionImg("");
						setQuestionUrl("");
						setDifficuilty("");
						setQuestionPreview("");
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
	// console.log("question no. ", questionNumber);

	const uploadQuestion = () => {
		if (questionNumber > totalQuestions) {
			console.log("question no. hello ", questionNumber);

			toast.dark(`${totalQuestions} questions added!`, {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
			// location.reload();
			history.push("/createtest");
		} else if (!questionNumber || !questionType || !questionImg || !subject || !correct) {
			window.onbeforeunload = function () {
				return "Test won't be saved, Are you sure?";
			};
			toast.error(`Please Fill all the details`, {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
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
					toast.info("Processing...", {
						position: "bottom-right",
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
					});
					setQuestionUrl(data.secure_url);
					console.log("Processing...");
				})
				.catch((err) => {
					console.log(err);
					toast.error("Something went wrong!", {
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

	const handleImageChange = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		previewQuestion(file);
		setQuestionImg(file);
	};

	const previewQuestion = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setQuestionPreview(reader.result);
		};
	};

	return (
		<div className={classes.card}>
			<div className={classes.viewQuesion}>
				<TableContainer component={Paper} elevation={4}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow component="th">
								<TableCell style={{ fontSize: "20px", fontWeight: "bold" }}>Q.No</TableCell>
								<TableCell align="center" style={{ fontSize: "20px", fontWeight: "bold" }}>
									Question Image
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align="center" style={{ fontSize: "20px", fontWeight: "bold" }}>
									{questionNumber}
								</TableCell>
								<TableCell>
									{questionPreview && (
										<img src={questionPreview} style={{ width: "45rem" }} alt="question" />
									)}
								</TableCell>
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
									onChange={(e) => setSubject(e.target.value)}>
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
								style={{ display: "none" }}
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
										onChange={(e) => setDifficuilty(e.target.value)}>
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
									onChange={(e) => setSubject(e.target.value)}>
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
										onChange={(e) => setSubject(e.target.value)}>
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
								// onClick={notify}
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
