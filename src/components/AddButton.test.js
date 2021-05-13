import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AddButton from './AddButton';


test('renders button page', () => {
    render(<AddButton />);
    const linkElement = screen.getByText("Submit");
    expect(linkElement).toBeInTheDocument();
  });

test('renders dropdown', () => {
    render(<AddButton />);
    const linkElement = screen.getByText("(+) Add more currencies");
    expect(linkElement).toBeInTheDocument();
});


const set = () => {
    const utils = render(<AddButton />)
    const input = utils.getByLabelText('curr-input')
    return {
      input,
      ...utils,
    }
  }

  test('It should keep the input', () => {
    const { input } = set()
    fireEvent.change(input, { target: { value: 'IDR' } })
    expect(input.value).toBe('IDR')
  })


Enzyme.configure({adapter: new EnzymeAdapter()});
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<AddButton {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe('Test Button component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('exist add button', () => {
        const navbar = wrapper.find('select');
        expect(navbar.length).toBe(1);
      });
    
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddButton></AddButton>, div);
      });
    
  });