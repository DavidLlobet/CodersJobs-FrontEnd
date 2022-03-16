import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { IUser, IUserRegistered } from "../../interfaces/interfaces";
import { loginUserAction, registerUserAction } from "../actions/actionCreators";
import { AppDispatch } from "../store/store";

export const registerUserThunk =
  (user: IUser) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_API_USER}/register`,
      user
    );
    if (response.status === 200) {
      toast.success("Te has registrado correctamente", {
        duration: 3000,
      });
      dispatch(registerUserAction(response.data));
    }
  };

export const loginUserThunk =
  (user: IUserRegistered) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_API_USER}/login`,
      user
    );
    if (response.status === 200) {
      const { ownerToken } = response.data;
      const loggedUser: any = jwtDecode(ownerToken);
      localStorage.setItem("loggedUser", JSON.stringify({ ownerToken }));
      dispatch(loginUserAction(loggedUser));
      toast.success("Te has logeado correctamente", {
        duration: 3000,
      });
    } else {
      toast.error("No has introducido tus datos correctamente", {
        duration: 3000,
      });
    }
  };
