import React from 'react';
import {shallow, mount} from 'enzyme';

import HotorCold from './HotorCold';

describe('<HotorCold />', () => {
  it('Renders without crashing', () => {
    shallow(<HotorCold />);
  })
})
