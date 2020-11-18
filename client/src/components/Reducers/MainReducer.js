import { testReducer } from "./TestReducer";
import { StudentReducer } from "./Reducer";

export const mainReducer = (...reducers) => (state, action) =>
	reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

mainReducer(testReducer, StudentReducer);
