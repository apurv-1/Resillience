import { SET_SELECTED_ANSWERS, SET_TEST, SET_CURRENT_INDEX, SET_SHOW_RESULTS, SET_STARTED, SET_IS_VISITED, SET_IS_MARKED, SET_INCREMENT_TIME, SET_SUBJECT, CLEAR } from "./types";

export const initialState = {
  test: [],
  currentIndex: 0,
  currentSubject: "Physics",
  selectedAnswers: [],
  timeElapsed: [],
  showResult: false,
  isStarted: false,
  isVisited: [],
  isMarked: []
};

export function testReducer(state, action) {
  switch (action.type) {
    case SET_TEST:
      return {
        ...state,
        test: action.test,
        timeElapsed: new Array(action.test.questions.length).fill(0),
        isMarked: new Array(action.test.questions.length).fill(false),
        isVisited: new Array(action.test.questions.length).fill(false)
      };
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.currentIndex
      };
    case SET_SUBJECT:
      return {
        ...state,
        currentSubject: action.currentSubject
      };
    case SET_SELECTED_ANSWERS:
      return {
        ...state,
        answers: action.answers
      };
    case SET_SHOW_RESULTS:
      return {
        ...state,
        showResult: action.showResult
      };
    case SET_STARTED:
      return {
        ...state,
        isStarted: action.isStarted
      };
    case SET_IS_VISITED:
      return {
        ...state,
        isVisited: action.isVisited
      };
    case SET_IS_MARKED:
      return {
        ...state,
        isMarked: action.isMarked
      };
    case SET_INCREMENT_TIME:
      return {
        ...state,
        timeElapsed: Object.assign([], state.timeElapsed, {
          [state.currentIndex]: state.timeElapsed[state.currentIndex] + 1
        })
      };
    case CLEAR:
      return window.location.reload();

    default:
      return state;
  }
}
