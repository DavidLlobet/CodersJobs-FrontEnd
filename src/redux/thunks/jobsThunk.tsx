import { getJobsAction } from "../actions/actionCreators";
import { IJob } from "../../interfaces/interfaces";
import { AppDispatch } from "../store/store";

const apiUrl = 'https://codersjobs.herokuapp.com/';

const getJobsThunk = () => async (dispatch: AppDispatch): Promise<void> => {
  const response = await fetch(`${apiUrl}jobs`);
  const jobs: IJob[] = await response.json();
  dispatch(getJobsAction(jobs));
};


export default getJobsThunk;