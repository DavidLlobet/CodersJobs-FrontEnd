import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../interfaces/interfaces";
import { RootState } from "../redux/store/store";
import registerUserThunk from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  const registerUser = (userRegister: IUser) => {
    dispatch(registerUserThunk(userRegister));
  };
  return {
    user,
    registerUser,
  };
};

export default useUser;
