import { SET_ADMIN, SET_USER_TYPE, SET_STUDENT, CLEAR } from "./types";

export const initialState = {
	userType: "",
};

export const userReducer = (state, action) => {
	switch (action.type) {
		case SET_STUDENT:
			return action.payload;
		case SET_USER_TYPE:
			return {
				...state,
				userType: action.userType,
			};
		case CLEAR:
			return null;
		case SET_ADMIN:
			return action.payload;
		default:
			return state;
	}
	// if (action.type === "STUDENT") {
	// 	console.log(action);
	// 	return action.payload;
	// }
	// if (action.type === "CLEAR") {
	// 	return null;
	// }
	// if (action.type === "ADMIN") {
	// 	return action.payload;
	// }
	// return state;
};
