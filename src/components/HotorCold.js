import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../css/hotorcold.css';

import GuessBox from './GuessBox';
import Nav from './Nav'

class HotorCold extends Component {
  constructor(props) {
    super(props);
      this.state = {
        guessesTaken: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      guessesTaken: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(`Submitted your guess successfully ${this.state.guessesTaken}`)
  }

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
