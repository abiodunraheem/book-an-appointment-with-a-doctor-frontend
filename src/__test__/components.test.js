// import React from 'react';
// import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';
// import App from '../App';
// import store from '../redux/ConfigureStore';
// import Reservations from '../components/Reservations';
// import Reserve from '../components/Reserve';

// const createComponent = (component) => <Provider store={store}>{component}</Provider>;

// describe('Test for components', () => {
//   test('renders correctly', async () => {
//     renderer.create(<App />);
//   });

//   test('Reservation page should render correctly', () => {
//     const component = renderer
//       .create(createComponent(<Reservations />))
//       .toJSON();

//     expect(component).toMatchSnapshot();
//   });
//   test('Reserve page should render correctly', () => {
//     const component = renderer
//       .create(createComponent(<Reserve />))
//       .toJSON();

//     expect(component).toMatchSnapshot();
//   });
// });
