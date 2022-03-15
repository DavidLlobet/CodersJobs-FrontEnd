import { IJob, IGetJobsAction, IAction} from "../../interfaces/interfaces";
import actionTypes from "../actions/actionTypes";



const jobsReducer = (jobs: IJob[] = [], action: IAction = {type: ''}): Array<IJob> => {
  let newJobs: IJob[];

  switch (action.type) {
    case actionTypes.getJobs:
      newJobs = [...(action as IGetJobsAction).jobs];
      break;
    default:
      newJobs = jobs;
  }
  return newJobs;
};

export default jobsReducer;