import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../css/hotorcold.css';

import GuessBox from './GuessBox';
import Nav from './Nav'

class HotorCold extends Component {
  render() {
    return (
      <div className='HotorCold'>
        <Nav />
        <h1 className='HotorColdTittle'>HOT or COLD</h1>
        <GuessBox />
      </div>
    );
  }
}

export default HotorCold;
