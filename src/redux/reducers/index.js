import addeditdelete from "./addeditdelete";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  data: addeditdelete,
});

export default rootReducer;
