import axios from "axios";

import toast from "react-hot-toast";
import { getJobsAction, loadJobAction, createJobAction } from "../actions/actionCreators";
import { IJob } from "../../interfaces/interfaces";
import { AppDispatch } from "../store/store";
// import paths from "../../paths/paths";

const apiUrl = "https://codersjobs.herokuapp.com/";

export const getJobsThunk =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await fetch(`${apiUrl}jobs`);
    const jobs: IJob[] = await response.json();
    dispatch(getJobsAction(jobs));
  };

export const loadJobThunk = (jobId: string) => async (dispatch: AppDispatch):Promise<void> => {
  const response = await fetch(`${apiUrl}jobs/${jobId}`);
  const job:IJob = await response.json();
  dispatch(loadJobAction(job));
};

export const createJobThunk =
  (job: object) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const storageUser: any = localStorage.getItem("loggedUser");
      const { ownerToken } = JSON.parse(storageUser);
      const headers = {Authorization: `Bearer ${ownerToken}`}
      const newJob = await axios.post(`${apiUrl}jobs`,job, {headers});

      if (newJob.status === 201) {
        toast.success("Successfully created job");
         dispatch(createJobAction(newJob.data));
      }
    } catch {
      toast.error("Error");
    }
  };
