import { useCallback } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { getJobsThunk } from "../redux/thunks/jobsThunk";
import { RootState } from "../redux/store/store";

const useJobs = () => {
  const jobs = useSelector((store: RootState) => store.jobs);
  const dispatch: Dispatch<any> = useDispatch();

  const getJobs = useCallback(() => {
    dispatch(getJobsThunk());
  }, [dispatch]);

  return { jobs, getJobs };
};

export default useJobs;
