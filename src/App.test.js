import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


test('renders main page', () => {
  render(<App />);
  const linkElement = screen.getByText("USD - United States Dollar");
  expect(linkElement).toBeInTheDocument();
});


Enzyme.configure({adapter: new EnzymeAdapter()});
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe('Test main page has components', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('exist add button', () => {
    const navbar = wrapper.find('AddButton');
    expect(navbar.length).toBe(1);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App></App>, div);
  });
});


