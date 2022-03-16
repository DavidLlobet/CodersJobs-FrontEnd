import { AnyAction } from "redux";

import actionTypes from "../actions/actionTypes";

const searchReducer = (searchInput: string = '', action: AnyAction = {type:''}) => {
  let newSearchInput: string;

  if (action.type === actionTypes.changeSearchInput) {
    newSearchInput = action.payload;
  } else {
    newSearchInput = searchInput;
  }

  return newSearchInput;
};

export default searchReducer;