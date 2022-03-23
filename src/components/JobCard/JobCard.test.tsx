import {Provider} from 'react-redux';
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';

import store from '../../redux/store/store';
import JobCard from './JobCard';

describe('Given a JobCard component', ()=>{
  describe('When it receives a job', () =>{
    test('It should render a card with the company name', ()=>{
      const jobExample = {
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
      }

      render(
        <Provider store={store}>
          <Router>
            <JobCard job={jobExample} actionOnClick={()=>{}}/>
          </Router>
        </Provider>
      )

      const jobCard = screen.getByRole('listitem');
      const jobTitle = screen.getByText(jobExample.title);
      const companyName = screen.getByText(jobExample.company); 
    
      expect(jobCard).toBeInTheDocument();
      expect(jobTitle).toBeInTheDocument();
      expect(companyName).toBeInTheDocument();

    })
  })
});