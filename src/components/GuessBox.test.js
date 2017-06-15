import React from 'react';
import {shallow, mount, render} from 'enzyme';

import GuessBox from './GuessBox';

describe('<GuessBox />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessBox historyOfGuesses={[]}/>);
  })

  it('Renders user response correctly', () => {
    const message = "You win!";
    const wrapper = shallow(<GuessBox
      historyOfGuesses={[]}
      response={message}
      />);
    expect(wrapper.find('#user-feedback').text()).toEqual(message);
  })

  it('Calls submit callback passed on props.onSubmit', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessBox
      historyOfGuesses={[]}
      onSubmit={callback}
      />);
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalled();
  })

  it('Calls an onChange callback passed on props.onChange', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessBox
      historyOfGuesses={[]}
      onChange={callback}
      />);
    const value = 'Foo';
    wrapper.find('.input').simulate('change', {
      target: {value}
    })
    expect(callback).toHaveBeenCalled();
  })

  it('Calls the value callback when passed props.value', () => {
    const callback = jest.fn();
    const value = 'Developer 101';
    const wrapper = mount(<GuessBox
      historyOfGuesses={[]}
      value={value}
      onChange={callback}
      />);
      console.log(wrapper.find('.input').get(0).value)
    expect(wrapper.find('.input').get(0).value).toEqual(value)
  })

  it('it should render a number on callback of props.historyOfGuesses', () => {
    const value = 10;
    const wrapper = mount(<GuessBox
      historyOfGuesses={[value]}
      />)
      console.log(wrapper.find('#count').props())
      // expect(toEqual(value));
  })


  it ('should expect and render 3 li')
})
