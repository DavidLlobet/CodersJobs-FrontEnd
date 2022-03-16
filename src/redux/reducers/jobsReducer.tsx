import {AnyAction} from 'redux';

import { IJob} from "../../interfaces/interfaces";
import actionTypes from "../actions/actionTypes";



const jobsReducer = (
  jobs: IJob[] = [], 
  action: AnyAction = {type: ''}
): Array<IJob> => {

  let newJobs: IJob[];

  switch (action.type) {
    case actionTypes.getJobs:
    newJobs = [...action.payload];
      break;
    default:
      newJobs = jobs;
  }
  return newJobs;
};

export default jobsReducer;