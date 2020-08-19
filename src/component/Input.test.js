import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import Input from './Input'

describe('Input', () => {
    test('snapshot renders', () => {
        const tree = shallow(<Input />);
        expect(toJson(tree)).toMatchSnapshot();
    });
  });


let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render and update a Input', () => {
    // Test first render and effect
    act(() => {
      ReactDOM.render(<Input />, container);
    })

    const h1 = container.querySelector('h1')
    expect(h1.textContent).toBe('TODO\'s');
//https://stackoverflow.com/questions/48180499/testing-onchange-function-in-jest

describe('when things happened', () => {
    beforeEach(() => {
        // This will execute your useEffect() hook on your component
        // NOTE: You should use exactly React.useEffect() in your component,
        // but not useEffect() with React.useEffect import
        jest.spyOn(React, 'useState').mockImplementation(f => f());
        component = shallow(<Component/>);
    });
});

// test('handleInput', () => {
//     const { getByTagName } = render(<Input />)
//     const input = getByTagName(input);
//     expect(input).toHaveAttribute('type', 'text');
//     expect(handleChange).toBeCalled().toBe(e.target.value);
// });

test("label",()=>{
    const { getByLabelText } = render(<Input />)
    const input = getByLabelText('Name:');
    expect(input).toHaveAttribute('type', 'text');
})

});