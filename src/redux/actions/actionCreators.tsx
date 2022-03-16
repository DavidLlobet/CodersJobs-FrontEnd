import actionTypes from "./actionTypes";
import { IJob, IUser, IUserRegistered } from "../../interfaces/interfaces";

export interface IJobs {
  jobs: Array<Object>;
}

export const getJobsAction = (jobs: IJob[]) => ({
  type: actionTypes.getJobs,
  payload: jobs,
});

export const registerUserAction = (user: IUser) => ({
  type: actionTypes.registerUser,
  payload: user,
});

export const loginUserAction = (user: IUserRegistered) => ({
  type: actionTypes.loginUser,
  payload: user,
});
