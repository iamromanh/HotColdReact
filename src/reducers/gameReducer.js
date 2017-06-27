import { NEW_GAME, ADD_NUMBER, GUESS_BUTTON } from '../actions/index';

const initialGameState = {
  guessesTaken: [],
  currentGuess: '',
  randomNumberGenerator: Math.floor(Math.random() * 100),
  response: 'Guess a number between 1 - 100'
}

export const gameReducer = (state=initialGameState, action) => {
  switch (action.type) {
    // what do I want to do in here?
      //I want to take each property and resset back to initial state
    case 'NEW_GAME':
      return Object.assign({}, state, {
        guessesTaken: [],
        currentGuess: '',
        randomNumberGenerator: Math.floor(Math.random() * 100),
        response: 'Guess a number between 1 - 100'
      })
      break;
    case 'USER_INPUT':
      return Object.assign({}, state, {
        currentGuess: action.number
      })
    default:
    return state
  }
}
