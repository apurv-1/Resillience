import { SET_ADMIN, SET_USER_TYPE, SET_STUDENT, CLEAR } from "./types";

export const initialState = {
  userType: ""
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return {
        ...state,
        payload: action.payload
      };
    case SET_USER_TYPE:
      return {
        ...state,
        userType: action.userType
      };
    case SET_ADMIN:
      return {
        ...state,
        payload: action.payload
      };
    case CLEAR:
      return "";

    default:
      return state;
  }
};
