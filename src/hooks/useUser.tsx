import { useDispatch, useSelector } from "react-redux";
import { IUser, IUserRegistered } from "../interfaces/interfaces";
import { RootState } from "../redux/store/store";
import { registerUserThunk, loginUserThunk } from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  const registerUser = (userRegister: IUser) => {
    dispatch(registerUserThunk(userRegister));
  };

  const loginUser = (userLogin: IUserRegistered) => {
    dispatch(loginUserThunk(userLogin));
  };

  return {
    user,
    registerUser,
    loginUser,
  };
};

export default useUser;
