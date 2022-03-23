import { IJob } from "../../interfaces/interfaces";
import actionTypes from "../actions/actionTypes";
import jobsReducer from "./jobsReducer";

describe('Given a jobsReducer function', ()=>{
  describe('When it recieves an empty list of jobs and a get action with a number of jobs', ()=>{
    test('Then it should render a new list with the jobs received', ()=>{
      const initialList: IJob[] = [];
      const jobsList = [
        {
        id: '622f6978ec924fb90e7a7bc',
        title: "React developer",
        company: 'atSistemas',
        companyAnchor: 'https://www.atsistemas.com/es',
        jobAnchor: 'https://www.atsistemas.com/es',
        description: "Hay futbolin.",
        contactPerson: 'Toni',
        salary: 27000,
        numberOfWorkers: 50,
        startup: false,
        location: 'Barcelona',
        desiredProfile: 'Sentido de humor',
        image: '',
        owner: '622f6978ec924fb90e7a7bc1',
        },
        {
        id: '622f6978ec924fb90e7a7bc2',
        title: "Junior React Developer",
        company: 'atSistemas',
        companyAnchor: 'https://www.atsistemas.com/es',
        jobAnchor: 'https://www.atsistemas.com/es',
        description: "Hay futbolin.",
        contactPerson: 'Toni',
        salary: 27000,
        numberOfWorkers: 50,
        startup: false,
        location: 'Barcelona',
        desiredProfile: 'Sentido de humor',
        image: '',
        owner: '622f6978ec924fb90e7a7bc1',
        }
      ];
      const action = {
        type: actionTypes.getJobs,
        payload: jobsList,
      }

      const newList=jobsReducer(initialList, action);
      expect(jobsList).toEqual(newList); 
    })
  })
})