import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import SideBar from '../components/SideBar';

describe('BookAppointment', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('user', 1);
    const tree = render(
      <Provider store={store}>
        <Router>
          <SideBar />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
