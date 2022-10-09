import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import App from '../App';

test('data is added into local storage', () => {
  describe('App', () => {
    localStorage.clear();
    // and reset all mocks
    jest.clearAllMocks();
    beforeEach(() => {
      window.localStorage.clear();
    });
    it('renders correctly', () => {
      const tree = render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
