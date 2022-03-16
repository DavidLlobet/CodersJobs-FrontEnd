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
      const { token } = response.data;
      const loggedUser: any = jwtDecode(token);
      localStorage.setItem("loggedUser", JSON.stringify({ token }));
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
