import App from './App';
import Enzyme, { shallow}  from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });


// Shallow rendering - renders components only one level deep 
// Keeps things clean
test('renders learn react link', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper).toBeTruthy
});