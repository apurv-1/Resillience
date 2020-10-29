import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(() => ({
	root: {
		// margin: "4%",
		marginTop: "5%",
		// maxWidth:"70%",
		// maxHeight:"100%",

		paddingLeft: "60px",
		paddingRight: "60px",
	},
	top: {
		marginTop: "-5%",
	},
	box: {
		padding: "10px",
	},
	question: {
		height: "100%",
		width: "200px",
		marginTop: "2%",
		alignItems: "center",
	},
	optionContainer: {
		width: "100%",
	},
	option: {
		marginLeft: "22%",
		marginTop: "10px",
		marginBottom: "10px",
	},
	buttonContainer: {
		padding: "20px",
	},
	button: {
		marginLeft: "80px",
	},
	fab: {
		margin: "10px",
	},
	fabBox: {
		padding: "20px",
		maxWidth: "300px",
	},
	timer: {
		textAlign: "center",
		textSizeAdjust: "90%",
	},
}));

const QuestionKeysComponent = ({ test, handleCurrentIndex }) => {
	const classes = useStyles();
	// const [length, setLength] = useState(0);
	// const [questions, setQuestions] = useState([]);

	// useEffect(() => {
	// 	setLength(test.questions.length);
	// 	setQuestions(test.questions);
	// }, []);
	// setQuestions(test.questions);

	return (
		<div>
			<div className={classes.fabBox}>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				<b>Questions Overview: </b>

				<div>
					{test.questions.length &&
						test.questions.map(({ questionNumber }) => (
							<Fab
								size="medium"
								color="secondary"
								key={questionNumber}
								className={classes.fab}
								// onClick={(e) => handleCurrentIndex(e.target.questionNumber)}
							>
								{questionNumber}
							</Fab>
						))}
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
};

export default QuestionKeysComponent;
