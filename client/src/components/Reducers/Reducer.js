export const InitialState = null;

export const StudentReducer = (state, action) => {
	if (action.type === "STUDENT") {
		return action.payload;
	}
	if (action.type === "CLEAR") {
		return null;
	}
	if (action.type === "ADMIN") {
		return action.payload;
	}
	return state;
};
