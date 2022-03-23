import { getJobsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe('Given a getJobs action creator', ()=>{
  describe('When it receives a list of jobs and a get action', ()=>{
    test('Then it should return a get type action with the jobs received', ()=>{
      const jobsList=[
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
      const expectedAction = {
        type: actionTypes.getJobs,
        payload: jobsList,
      };

      const resultAction = getJobsAction(jobsList);

      expect(resultAction).toEqual(expectedAction);
    })
  })
})