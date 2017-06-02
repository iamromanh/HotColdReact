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
        currentGuess: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      currentGuess: value,
    })
    console.log(value);
  }

  handleSubmit(event) {
    // camparison is handled here.
    const value = this.state.currentGuess;
    console.log(`Submitted your guess successfully ${this.state.currentGuess}`);
    alert(`Submitted your guess successfully ${this.state.currentGuess}`);
    this.setState({
      guessesTaken: [...this.state.guessesTaken, value],
      currentGuess: ''
    })
    event.preventDefault();
  }

  render() {
    console.log(this.state.guessesTaken)
    return (
      <div className='HotorCold'>
        <Nav
          newGame={this.startNewGame}
        />
        <h1 className='HotorColdTittle'>HOT or COLD</h1>
        <GuessBox
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.currentGuess}
          stateLength={this.state.guessesTaken.length}
        />
      </div>
    );
  }
}

export default HotorCold;
