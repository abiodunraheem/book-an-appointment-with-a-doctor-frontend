import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/ConfigureStore';
import DoctorList from '../../DoctorList';

describe('SingleDoctor', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <DoctorList />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});