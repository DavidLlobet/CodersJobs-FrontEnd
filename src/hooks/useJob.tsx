import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";


import { loadJobThunk } from "../redux/thunks/jobsThunk";
import { RootState } from "../redux/store/store";

const useJob = () => {
  const job = useSelector( (store: RootState) => store.job);
  const dispatch = useDispatch();

  const loadJob = useCallback(
    (jobId)=>{
      dispatch(loadJobThunk(jobId));
  },[dispatch]);

  return {job, loadJob}
};

export default useJob;