import { combineReducers } from "redux";
import testThunk from "../action/testThunk";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  testThunk: testThunk,
});

export default rootReducer;
