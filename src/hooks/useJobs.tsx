import { useCallback } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { getJobsThunk, createJobThunk} from "../redux/thunks/jobsThunk";
import { RootState } from "../redux/store/store";
import { IJob } from "../interfaces/interfaces";

const useJobs = () => {
  const jobs = useSelector((store: RootState) => store.jobs);
  const dispatch: Dispatch<any> = useDispatch();

  const getJobs = useCallback(() => {
    dispatch(getJobsThunk());
  }, [dispatch]);



  const createJob = (job: IJob) => {
    dispatch(createJobThunk(job));
  };

  return { jobs, getJobs, createJob };
};

export default useJobs;
