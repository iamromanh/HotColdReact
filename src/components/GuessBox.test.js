import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessBox from './GuessBox';

describe('<GuessBox />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessBox historyOfGuesses={[1,2,3]}/>);
  })

  it('Renders user response correctly', () => {
    const message = "Response message";
    const wrapper = shallow(<GuessBox historyOfGuesses={[]} response={message}/>);
    expect(wrapper.find('#user-feedback').text()).toEqual(message);
  })

  it('Calls submit callback passed on props.onSubmit', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessBox historyOfGuesses={[]} onSubmit={callback}/>);
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalled();
  })
  // it('Renders the guess button initially', () => {
  //   const wrapper = shallow(<GuessBox historyOfGuesses={[]}/>);
  //   expect(wrapper.hasClass('button')).toEqual(true);
  // })
})
