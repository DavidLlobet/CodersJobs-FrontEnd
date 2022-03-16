import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  jobs: jobsReducer,
  searchInput: searchReducer,
});

export default rootReducer;