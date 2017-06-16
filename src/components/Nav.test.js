import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Nav from './Nav';

describe('<Nav />', () => {
  it('Renders without crashing', () => {
    shallow(<Nav />)
  })

  it('Start a new game when clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Nav newGame={callback} />);
    const link = wrapper.find('.newGame');
    // console.log('link ===>', link)
    link.simulate('click');
    expect(callback).toHaveBeenCalled();
  });
})
