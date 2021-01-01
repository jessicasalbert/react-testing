import App from './App';
import Enzyme, { shallow}  from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });


// Shallow rendering - renders components only one level deep 
// Keeps things clean

test("renders without error", () => {
  
})

test("renders button", () => {

});

test("renders counter display", () => {

});

test("counter starts at 0", () => {

});

test("clicking on button increments counter display", () => {

});