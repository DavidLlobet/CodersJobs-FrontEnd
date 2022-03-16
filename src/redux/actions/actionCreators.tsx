import actionTypes from "./actionTypes";
import { IJob, IUser } from "../../interfaces/interfaces";

export interface IJobs {
  jobs: Array<Object>;
}

export const getJobsAction = (jobs: IJob[]) => ({
  type: actionTypes.getJobs,
  payload: jobs,
});

export const createJobAction = (job: IJob) => ({
  type: actionTypes.createJob,
  payload: job,
});

export const registerUserAction = (user: IUser) => ({
  type: actionTypes.registerUser,
  payload: user,
});
