import { AnyAction } from "redux";
import { IUserRegistered } from "../../interfaces/interfaces";
import actionTypes from "../actions/actionTypes";

const userReducer = (
  user: IUserRegistered,
  action: AnyAction = { type: "" }
) => {
  let newUser;

  switch (action.type) {
    case actionTypes.registerUser:
      newUser = {
        user: action.payload,
        isAuthenticated: false,
      };
      break;

    case actionTypes.loginUser:
      newUser = {
        user: action.payload,
        isAuthenticated: true,
      };
      break;

    case actionTypes.logoutUser:
      newUser = { user: {}, isAuthenticated: false };
      break;

    default:
      newUser = { ...user };
  }
  return newUser;
};

export default userReducer;
