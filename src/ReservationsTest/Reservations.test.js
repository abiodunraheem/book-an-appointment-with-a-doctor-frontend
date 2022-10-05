import renderer from 'react-test-renderer';
import Reservations from '../components/Reservations';

test('renders correctly the list of reservations', () => {
  const tree = renderer.create(<Reservations />).toJSON();
  expect(tree).toMatchSnapshot();
});
