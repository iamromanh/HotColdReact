import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Nav from './Nav';

describe('<Nav />', () => {
  it('Renders without crashing', () => {
    shallow(<Nav />)
  })

  it('Start a new game when clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Nav onClick={callback} />);
    // console.log('This is the wrapper ====>', wrapper)
    const link = wrapper.find('.newGame');
    // console.log('this is the link =====>', link)
    link.simulate('click', {
      preventDeafult() {}
    });
    expect(callback).toHaveBeenCalled();
  });
})
