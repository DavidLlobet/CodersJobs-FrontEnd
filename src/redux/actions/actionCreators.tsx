import actionTypes from "./actionTypes";

export interface IJobs {
  jobs: Array<Object>;
}

export const getJobsAction = (jobs: IJobs) => ({
  type: actionTypes.getJobs,
  payload: jobs,
});