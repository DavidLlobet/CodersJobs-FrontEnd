import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import userReducer from "./userReducer";
import searchReducer from './searchReducer';

const rootReducer = combineReducers({ jobs: jobsReducer, user: userReducer, searchInput: searchReducer });

export default rootReducer;
