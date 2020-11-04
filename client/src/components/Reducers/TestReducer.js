import {
	SET_ANSWERS,
	SET_TEST,
	SET_OPTIONS,
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_SHOW_RESULTS,
	SET_IS_CLICKED,
} from "./types";

export const initialState = {
	test: [],
	options: [],
	currentIndex: 0,
	currentAnswer: "",
	answers: [],
	showResult: false,
	isClicked: false,
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
		case SET_OPTIONS:
			return {
				...state,
				options: action.options,
			};
		case SET_CURRENT_INDEX:
			return {
				...state,
				currentIndex: action.currentIndex,
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
		case SET_IS_CLICKED:
			return {
				...state,
				isClicked: action.isClicked,
			};
		default:
			return state;
	}
}
