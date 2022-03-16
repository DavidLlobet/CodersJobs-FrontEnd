import axios from "axios";

import { getJobsAction, createJobAction } from "../actions/actionCreators";
import { IJob } from "../../interfaces/interfaces";
import { AppDispatch } from "../store/store";
import paths from "../../paths/paths";

const apiUrl = "https://codersjobs.herokuapp.com/";

export const getJobsThunk =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await fetch(`${apiUrl}jobs`);
    const jobs: IJob[] = await response.json();
    dispatch(getJobsAction(jobs));
  };

export const createJobThunk =
  (job: IJob) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const newJob: IJob = await axios.post(`${apiUrl}${paths.postJob}`, job);

    dispatch(createJobAction(newJob));
  };
