import { SET_ANSWERS, SET_CURRENT_QUESTION, SET_CURRENT_ANSWER, SET_SHOW_RESULTS } from "./types";

export function testReducer(state, action) {
	switch (action.type) {
		case SET_CURRENT_ANSWER:
			return {
				...state,
				currentAnswer: action.currentAnswer,
			};
		case SET_CURRENT_QUESTION:
			return {
				...state,
				currentQuestion: action.currentQuestion,
			};
		case SET_ANSWERS:
			return {
				...state,
				answers: action.answers,
			};
		case SET_SHOW_RESULTS:
			return {
				...state,
				showResults: action.showResults,
			};
		default:
			return state;
	}
}
