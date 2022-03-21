import actionTypes from "./actionTypes";
import { IJob, IUser, IUserRegistered } from "../../interfaces/interfaces";

export interface IJobs {
  jobs: Array<Object>;
}

export const getJobsAction = (jobs: IJob[]) => ({
  type: actionTypes.getJobs,
  payload: jobs,
});

export const loadJobAction = (job: IJob) => ({
  type: actionTypes.loadJob,
  payload: job,
});

export const createJobAction = (job: IJob) => ({
  type: actionTypes.createJob,
  payload: job,
});

export const registerUserAction = (user: IUser) => ({
  type: actionTypes.registerUser,
  payload: user,
});

export const loginUserAction = (user: IUserRegistered) => ({
  type: actionTypes.loginUser,
  payload: user,
});

export const loadUserAction = (user: IUserRegistered) => ({
  type: actionTypes.loadUser,
  payload: user,
});

export const logoutUserAction = () => ({
  type: actionTypes.logoutUser,
});
