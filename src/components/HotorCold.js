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
    this.stateLength = this.stateLength.bind(this);
    console.log(this.state.guessesTaken)

  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      guessesTaken: [...this.state.guessesTaken, value]
    })
    console.log(this.state.guessesTaken)
  }

  handleSubmit(event) {
    console.log(`Submitted your guess successfully ${this.state.guessesTaken}`)
    alert(`Submitted your guess successfully ${this.state.guessesTaken}`)
    event.preventDefault();
  }

  stateLength() {
    const stateCount = this.state.guessesTaken
    const numberOfGuesses = stateCount.map((guess) => {
      return numberOfGuesses.length();
    })
    console.log(numberOfGuesses)
    console.log(stateCount)
  }

  render() {
    return (
      <div className='HotorCold'>
        <Nav />
        <h1 className='HotorColdTittle'>HOT or COLD</h1>
        <GuessBox
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.guessesTaken}
          stateLength={this.stateLength}/>
      </div>
    );
  }
}

export default HotorCold;
