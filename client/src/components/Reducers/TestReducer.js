import {
	SET_SELECTED_ANSWERS,
	SET_TEST,
	SET_CURRENT_TIME,
	SET_MARKS,
	SET_TIMER,
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_SHOW_RESULTS,
	SET_IS_ATTEMPTED,
	SET_IS_MARKED,
} from "./types";

export const initialState = {
	test: [],
	currentIndex: 0,
	marks: 0,
	currentAnswer: "",
	selectedAnswers: [],
	currentTime: 0,
	timeElapsed: [],
	showResult: false,
	isAttempted: [],
	isMarked: [],
};

export function testReducer(state, action) {
	switch (action.type) {
		case SET_CURRENT_ANSWER:
			return {
				...state,
				currentAnswer: action.currentAnswer,
			};
		case SET_TEST:
			return {
				...state,
				test: action.test,
			};
		case SET_CURRENT_TIME:
			return {
				...state,
				currentTime: action.currentTime,
			};
		case SET_CURRENT_INDEX:
			return {
				...state,
				currentIndex: action.currentIndex,
			};
		case SET_MARKS:
			return {
				...state,
				marks: action.marks,
			};
		case SET_SELECTED_ANSWERS:
			return {
				...state,
				answers: action.answers,
			};
		case SET_TIMER:
			return {
				...state,
				timeElapsed: action.timeElapsed,
			};
		case SET_SHOW_RESULTS:
			return {
				...state,
				showResult: action.showResult,
			};
		case SET_IS_ATTEMPTED:
			return {
				...state,
				isAttempted: action.isAttempted,
			};
		case SET_IS_MARKED:
			return {
				...state,
				isMarked: action.isMarked,
			};
		default:
			return state;
	}
}
