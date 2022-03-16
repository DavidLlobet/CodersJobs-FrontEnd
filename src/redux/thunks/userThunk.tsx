import axios from "axios";
import toast from "react-hot-toast";
import { IUser } from "../../interfaces/interfaces";
import { registerUserAction } from "../actions/actionCreators";

const registerUserThunk =
  (user: IUser) =>
  async (dispatch: any): Promise<void> => {
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

export default registerUserThunk;
