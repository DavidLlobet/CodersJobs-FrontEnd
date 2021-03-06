import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser, IUserRegistered } from "../interfaces/interfaces";
import { RootState } from "../redux/store/store";
import {
  registerUserThunk,
  loginUserThunk,
  logoutUserThunk,
  loadUserThunk,
  applyJobThunk,
} from "../redux/thunks/userThunk";

const useUser = () => {
  const user: any = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  const registerUser = (userRegister: IUser) => {
    dispatch(registerUserThunk(userRegister));
  };

  const loginUser = (userLogin: IUserRegistered) => {
    dispatch(loginUserThunk(userLogin));
  };

  const applyJob = useCallback(
    (userId, newUser) => {
      dispatch(applyJobThunk(userId, newUser));
    },
    [dispatch]
  );

  const loadUser = useCallback(
    (userId) => {
      dispatch(loadUserThunk(userId));
    },
    [dispatch]
  );

  const logoutUser = () => {
    dispatch(logoutUserThunk());
  };

  return {
    user,
    registerUser,
    loginUser,
    applyJob,
    loadUser,
    logoutUser,
  };
};

export default useUser;
