import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import {BrowserRouter as Router} from 'react-router-dom';

import store from '../../redux/store/store';
import JobDetail from "./JobDetail";

describe('Given a JobDetail component',()=>{
  describe('When it receives an id',()=>{
    test('Then it should render the details of the job with that id',()=>{
      render(
        <Provider store={store}>
          <Router>
            <JobDetail />
          </Router>
        </Provider>
      )

      const jobDescription=screen.getByText('Descripcion');
      expect(jobDescription).toBeInTheDocument();
    })
  })
})