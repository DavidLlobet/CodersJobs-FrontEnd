import { combineReducers } from "redux";
import jobReducer from "./jobReducer";
import jobsReducer from "./jobsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ 
  jobs: jobsReducer, 
  job: jobReducer,
  user: userReducer 
});

export default rootReducer;
