import React from 'react';
import ReactDOM from 'react-dom';
import HotorCold from './HotorCold';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HotorCold />, div);
});
