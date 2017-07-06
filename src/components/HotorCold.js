import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newGame, userInput, submitResponse } from '../actions/index';

import 'bulma/css/bulma.css'
import '../css/hotorcold.css';

import GuessBox from './GuessBox';
import Nav from './Nav'

export class HotorCold extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callNewGame = this.callNewGame.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.dispatch(userInput(value));
  }

  handleSubmit(event) {
     event.preventDefault();

    const value = this.props.currentGuess;
    const winningNumber = this.props.randomNumberGenerator;
    const historyGuesses = this.props.guessesTaken;

    console.log('winningNumber', winningNumber);

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
      this.props.dispatch(userInput(''))
      return;
    }

    if (this.isRepeated(guess, historyGuesses)) {
      alert('sorry you already entered this number');
      this.props.dispatch(userInput(''))
      return;
    }

    if (guess > 100) {
      alert('Sorry please choose a number less that 100')
      this.props.dispatch(userInput(''))
    }

    const difference = Math.abs(guess - winningNumber);

    let response;
    if (guess === winningNumber) {
      response = youWin;
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
    this.props.dispatch(submitResponse(guess, response));
  }

  isRepeated(guess, historyGuesses) {
    let repeatedArray = historyGuesses.filter((item, index) => {
      return item === guess;
    });
    return repeatedArray.length > 0;
  }

  callNewGame() {
    console.log('I was clicked and I am ready to start a new game for you')
      this.props.dispatch(newGame());
    }

  render() {
    console.log(this.props);
    return (
      <div className='HotorCold'>
        <Nav
          newGame={this.callNewGame}
        />
        <h1 className='HotorColdTittle'>HOT or COLD</h1>
        <GuessBox
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.props.currentGuess}
          historyOfGuesses={this.props.guessesTaken}
          response={this.props.response}
        />
      </div>
    );
  }
}

HotorCold.defaultProps = {
  guessesTaken: [],
  currentGuess: '',
  randomNumberGenerator: 0,
  response: ''
}

const mapStateToProps = state => ({
  guessesTaken: state.guessesTaken,
  currentGuess: state.currentGuess,
  randomNumberGenerator: state.randomNumberGenerator,
  response: state.response
})

export default connect(mapStateToProps)(HotorCold);
