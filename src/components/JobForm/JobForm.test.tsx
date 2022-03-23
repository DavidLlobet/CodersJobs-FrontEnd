import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux"
import {BrowserRouter as Router} from 'react-router-dom';

import store from '../../redux/store/store';
import JobForm from './JobForm';

  describe('Given a JobForm component ',()=>{
    describe('When the user types in inputs', ()=>{
      test('Then values should be updated', ()=>{
        render(
          <Provider store={store}>
            <Router>
              <JobForm />
            </Router>
          </Provider>
        )

        userEvent.type(screen.getByPlaceholderText('Población'), 'Barcelona');
        expect(screen.getByPlaceholderText('Población')).toHaveValue('Barcelona');
      })
    })
  })