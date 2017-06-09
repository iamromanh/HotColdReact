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
        currentGuess: '',
        randomNumberGenerator: Math.floor(Math.random() * 100),
        response: 'Make your Guess!'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      currentGuess: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const value = this.state.currentGuess;
    const winningNumber = this.state.randomNumberGenerator;
    const historyGuesses = this.state.guessesTaken;
    // Convert value from a string to an intenger
    const guess =  parseInt(value, 10);

    // Winning responses
    const youWin = 'You Won. Click new game to play again!';
    const effinHot = 'Your effin hot!';
    const kindOfHot = 'Your kind of hot!';
    const kidnOfWarm =  'Kid of warm!';
    const coolingOff = 'Cooling off!';
    const kindOfCold = 'Kind of cold!';
    const cold = 'Cold';
    const iceIceBaby = 'Ice ice baby!';

    if (isNaN(guess)) {
      alert('Sorry this is not a number please enter an number');
      this.setState({
        currentGuess: ''
      })
      return;
    }

    if (this.isRepeated(guess, historyGuesses)) {
      alert('sorry you already entered this number');
      this.setState({
        currentGuess: ''
      })
      return;
    }

    const difference = Math.abs(guess - winningNumber);

    let response;
    if (guess === winningNumber) {
      response = youWin;
      alert('you win mother fucker');
    } else if (difference <= 10){
      response = effinHot;
    } else if (difference <= 25) {
      response = kindOfHot;
    } else if (difference <= 35) {
      response = kidnOfWarm;
    } else if (difference <= 40) {
      response = coolingOff;
    } else if (difference <= 50) {
      response =  kindOfCold;
    } else if (difference <= 65) {
      response = cold;
    } else if (difference <= 80) {
      response = iceIceBaby;
    }

    this.setState({
      guessesTaken: [...historyGuesses, guess],
      currentGuess: '',
      response: response
    })
  }

  isRepeated(guess, historyGuesses) {
    let repeatedArray = historyGuesses.filter((item, index) => {
      return item === guess;
    });
    return repeatedArray.length > 0;
  }

  render() {
    console.log('historyGuesses ===>', this.state.guessesTaken)

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
          historyOfGuesses={this.state.guessesTaken}
          response={this.state.response}
          newGame={this.newGame}
        />
      </div>
    );
  }
}

export default HotorCold;
