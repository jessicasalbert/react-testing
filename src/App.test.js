import App from './App';
import React from 'react';
import Enzyme, { shallow}  from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />)
// Factory function creates a ShallowWrapper for App component
// Shallow rendering - renders components only one level deep 
// Keeps things clean

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test("renders without error", () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1)
})

test("renders button", () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "increment-button")
  expect(appComponent.length).toBe(1)
});

test("renders counter display", () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "counter-display")
  expect(appComponent.length).toBe(1)
});

test("counter starts at 0", () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking on button increments counter display", () => {

});