import { AnyAction } from "redux";
import { IUserReducer } from "../../interfaces/interfaces";
import actionTypes from "../actions/actionTypes";

const userReducer = (user: IUserReducer, action: AnyAction = { type: "" }) => {
  let newUser;

  switch (action.type) {
    case actionTypes.registerUser:
      newUser = {
        user: action.payload,
        isAuthenticated: false,
      };
      break;
    default:
      newUser = { ...user };
  }
  return newUser;
};

export default userReducer;
