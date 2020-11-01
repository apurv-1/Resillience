import {
	SET_ANSWERS,
	SET_TEST,
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_SHOW_RESULTS,
} from "./types";

export const initialState = {
	test: [],
	currentIndex: 0,
	currentOption: "",
	answers: [],
	showResult: false,
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
		default:
			return state;
	}
}
