import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { IUser, IUserRegistered } from "../../interfaces/interfaces";
import {
  applyJobAction,
  loadUserAction,
  loginUserAction,
  logoutUserAction,
  registerUserAction,
} from "../actions/actionCreators";
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

export const applyJobThunk =
  (userId: string, newUser: IUserRegistered) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const storageUser: any = localStorage.getItem("loggedUser");
    const token = JSON.parse(storageUser);
    const applyJob = await axios.put(
      `${process.env.REACT_APP_URL_API_USER}/${userId}`,
      newUser,
      {
        headers: {
          Authorization: `Bearer ${token.ownerToken}`,
        },
      }
    );
    dispatch(applyJobAction(applyJob.data));
  };

// export const addFavouriteThunk =
//   (userId, announcementId) => async (dispatch) => {
//     const { token } = JSON.parse(
//       localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
//     );
//     const response = await fetch(
//       `${apiUrl}/users/${userId}/favourites/${announcementId}`,
//       {
//         method: "PUT",
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//     const favourite = await response.json();
//     dispatch(addFavouriteAction(favourite));
//   };

export const loadUserThunk =
  (userId: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const storageUser: any = localStorage.getItem("loggedUser");
    const token = JSON.parse(storageUser);
    const loadUser = await axios.get(
      `${process.env.REACT_APP_URL_API_USER}/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token.ownerToken}`,
        },
      }
    );
    dispatch(loadUserAction(loadUser.data));
  };

export const logoutUserThunk = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("loggedUser");
  dispatch(logoutUserAction());
};
