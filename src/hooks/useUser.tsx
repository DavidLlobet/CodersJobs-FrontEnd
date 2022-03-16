import { useDispatch, useSelector } from "react-redux";
import { IUserReducer } from "../interfaces/interfaces";
import { RootState } from "../redux/store/store";
import registerUserThunk from "../redux/thunks/userThunk";

const useUser = () => {
  const user = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  const registerUser = (userRegister: IUserReducer) => {
    dispatch(registerUserThunk(userRegister));
  };
  return {
    user,
    registerUser,
  };
};

export default useUser;
