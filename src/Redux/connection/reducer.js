import { ActionTypes } from "../types";

const INITIAL_STATE = {
  isAuthenticatin: false,
  
};


const connectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticatin: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticatin: action.payload,
      };
    default:
      return state;
  }
};
export default connectReducer;
