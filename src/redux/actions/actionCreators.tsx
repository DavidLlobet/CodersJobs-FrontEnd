import actionTypes from "./actionTypes";
import { IJob } from "../../interfaces/interfaces";

export interface IJobs {
  jobs: Array<Object>;
}

export const getJobsAction = (jobs: IJob[]) => ({
  type: actionTypes.getJobs,
  payload: jobs,
});