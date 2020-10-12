export const InitialState = null;

export const TestReducer = (state, action) => {
	if (action.type === "CURRENTINDEX") {
		return action.payload;
	}
	// if(action.type === "UPDATEINDEX"){
	//     return{

	//     }
	// }
	return state;
};

export const StudentReducer = (state, action) => {
	if (action.type === "STUDENT") {
		return action.payload;
	}
	// if(action.type === "UPDATEINDEX"){
	//     return{

	//     }
	// }
	return state;
};
