import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import getJobsThunk from "../redux/thunks/jobsThunk";

const useJobs = () => {

  const jobs = useSelector( (store) => store.jobs);
  const dispatch = useDispatch();

  const getJobs = useCallback(
    (jobs) => {
    dispatch(getJobsThunk(jobs))
  });

  return { jobs, getJobs }

};

export default useJobs;