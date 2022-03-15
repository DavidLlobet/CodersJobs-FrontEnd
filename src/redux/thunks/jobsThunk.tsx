import { getJobsAction } from "../actions/actionCreators";
import { IJob } from "../../interfaces/interfaces";
import { AppThunk } from "../store/store";

const apiUrl = 'https://codersjobs.herokuapp.com/';

const getJobsThunk: AppThunk = () => async (dispatch: any): Promise<void> => {
  const response: Response = await fetch(`${apiUrl}jobs`);
  const jobs: IJob[] = await response.json();
  dispatch(getJobsAction(jobs));
};


export default getJobsThunk;