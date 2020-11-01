import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import ReactCrop from "react-image-crop";
// import CropIcon from "@material-ui/icons/Crop";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import "react-image-crop/dist/ReactCrop.css";

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
		// display: "flex",
		// width: "35%",
		flexDirection: "column",
		padding: "2% 4% 4%",
		textAlign: "center",
		// position: "fixed",
		justifyContent: "center",
	},
	container: {
		alignSelf: "stretch",
		padding: "3% 3% 3%",
		width: "80%",
		height: "80%",
		// border: "1px solid",
		marginLeft: "5%",
	},
	input: {
		display: "none",

		// marginLeft: "20px",
	},
	numerical: {
		width: "50%",
		// margin: "2.5% 2.5%",
	},
	button: {
		padding: "2%",
	},
	formControl: {
		width: "45%",
		margin: "2%",
		height: "100%",
		// width: "15%"
	},
	cropContainer12: {
		height: "100%",
	},
	cropContainer: {
		width: "100%",
		// height: "100%",
		display: "flex",
		justifyContent: "space-around",
		margin: "2px",
		// border:"2px solid",
		// background: "transparent",
	},
	showImage: {
		maxWidth: "100%",
		maxHeight: "100%",
	},
	croppedQuestion: {
		minWidth: "500px",
		minHeight: "500px",
	},
}));

const AddQuestions = ({ testID }) => {
	const classes = useStyles();
	const [openSubject, setOpenSubject] = useState(false);
	const [openCorrect, setOpenCorrect] = useState(false);
	const [openQuesType, setOpenQuesType] = useState(false);

	const [subject, setSubject] = useState("");
	const [questionType, setQuestionType] = useState("singleCorrect");

	const [correct, setCorrect] = useState("");
	const [numerical, setNumerical] = useState("");

	const [questionNumber, setQuestionNumber] = useState(1);
	const [questionImg, setQuestionImg] = useState("");
	const [questionUrl, setQuestionUrl] = useState("");

	// const [questionSrc, setQuestionSrc] = useState("");
	// const [finalQuestion, setFinalQuestion] = useState("");
	// const [crop, setCrop] = useState({});

	const pushQuestion = () => {
		if (questionType === "singleCorrect") {
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
						setSubject("");
						setQuestionImg("");
						setQuestionUrl("");
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
	};

	// useEffect(pushQuestion, [questionUrl]);

	const uploadQuestion = () => {
		console.log(questionImg);
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
				pushQuestion();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleImageChange = (e) => {
		setQuestionImg(e.target.files[0]);
		// setQuestionSrc(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<div className={classes.card}>
			<Paper elevation={5} className={classes.paper}>
				<div className={classes.form}>
					<Typography variant="h4" color="primary">
						Add Questions to test
					</Typography>
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
									<MenuItem value={"0"}>1</MenuItem>
									<MenuItem value={"1"}>2</MenuItem>
									<MenuItem value={"2"}>3</MenuItem>
									<MenuItem value={"3"}>4</MenuItem>
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
			{/* <div className={classes.cropContainer}>
				<div className={classes.showImage}>
					{questionSrc && (
						<div>
							<ReactCrop src={questionSrc} onImageLoaded={setQuestionImg} crop={crop} onChange={setCrop} />
							<Button
								variant="contained"
								color="secondary"
								className={classes.button}
								startIcon={<CropIcon />}
								onClick={getCroppedImg}>
								Crop
							</Button>
						</div>
					)}
				</div>
				<div className={classes.croppedQuestion}>
					{finalQuestion && (
						<div>
							<img src={finalQuestion} alt="cropped question" />
						</div>
					)}
				</div>
			</div> */}
		</div>
	);
};

export default AddQuestions;

// function getCroppedImg() {
// 	const canvas = document.createElement("canvas");
// 	const scaleX = questionImg.naturalWidth / questionImg.width;
// 	const scaleY = questionImg.naturalHeight / questionImg.height;
// 	canvas.width = crop.width;
// 	canvas.height = crop.height;
// 	const ctx = canvas.getContext("2d");
//
// 	ctx.drawImage(
// 		questionImg,
// 		crop.x * scaleX,
// 		crop.y * scaleY,
// 		crop.width * scaleX,
// 		crop.height * scaleY,
// 		0,
// 		0,
// 		crop.width,
// 		crop.height
// 	);
//
// 	const base64Image = canvas.toDataURL("image/jpeg");
// 	setFinalQuestion(base64Image);
// 	setQuestionImg(base64Image);
// }
