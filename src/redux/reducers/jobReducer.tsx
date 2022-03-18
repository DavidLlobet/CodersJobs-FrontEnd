import { AnyAction } from "redux";
import { IJob} from "../../interfaces/interfaces";
import actionTypes from "../actions/actionTypes";

const jobReducer = (job:IJob = {
  id: "",
  title: "",
  company: "",
  companyAnchor: "",
  jobAnchor: "",
  description: "",
  contactPerson: "",
  salary: undefined,
  startup: false,
  location: "",
  desiredProfile: "",
  releaseDate: new Date(),
}, action: AnyAction={type:''}) => {
  let newJob: IJob;

  switch (action.type) {
    case actionTypes.loadJob:
      newJob = {...action.payload};
      break;
    default:
      newJob = {...job};
  }

  return newJob;
};

export default jobReducer;