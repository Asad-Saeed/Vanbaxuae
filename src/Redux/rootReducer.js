import { combineReducers } from "redux";
import connectReducer from "./connection/reducer";
import getPairsReducer from "./pairs/reducer";
import userDetailReducer from "./userDetail.js/reducer"
const rootReducer = combineReducers({
  connect: connectReducer,
  pairs: getPairsReducer,
  userDetail:userDetailReducer
});

export default rootReducer;
