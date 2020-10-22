// import {
// 	SET_ANSWERS,
// 	SET_CURRENT_QUESTION,
// 	SET_CURRENT_ANSWER,
// 	SET_SHOW_RESULTS,
// } from "./types";

export const InitialState = null;

export const StudentReducer = (state, action) => {
	if (action.type === "STUDENT") {
		return action.payload;
	}
	if (action.type === "CLEAR") {
		return null;
	}
	// if(action.type === "UPDATEPROFILE"){
	//     return{

	//     }
	// }
	return state;
};
// export const TestReducer = (state, action) => {
// 	if (action.type === "CURRENTINDEX") {
// 		return action.payload;
// 	}
// 	// if(action.type === "UPDATEINDEX"){
// 	//     return{

// 	//     }
// 	// }
// 	return state;
// };

// export function quizReducer(state, action) {
// 	switch (action.type) {
// 		case SET_CURRENT_ANSWER:
// 			return {
// 				...state,
// 				currentAnswer: action.currentAnswer,
// 			};
// 		case SET_CURRENT_QUESTION:
// 			return {
// 				...state,
// 				currentQuestion: action.currentQuestion,
// 			};
// 		case SET_ANSWERS:
// 			return {
// 				...state,
// 				answers: action.answers,
// 			};
// 		case SET_SHOW_RESULTS:
// 			return {
// 				...state,
// 				showResults: action.showResults,
// 			};
// 		default:
// 			return state;
// 	}
// }
