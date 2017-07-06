import { NEW_GAME, USER_INPUT, SUBMIT_RESPONSE } from '../actions/index';

const initialGameState = {
  guessesTaken: [],
  currentGuess: '',
  randomNumberGenerator: Math.floor(Math.random() * 100),
  response: 'Guess a number between 1 - 100'
}

export const gameReducer = (state=initialGameState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return Object.assign({}, state, {
        guessesTaken: [],
        currentGuess: '',
        randomNumberGenerator: Math.floor(Math.random() * 100),
        response: 'Guess a number between 1 - 100'
      })
      // break;
    case 'USER_INPUT':
      return Object.assign({}, state, {
        currentGuess: action.number
      })
      // break;
    case 'SUBMIT_RESPONSE':
      return Object.assign({}, state, {
        guessesTaken: [...state.guessesTaken, action.guess],
        currentGuess: '',
        response: action.response
      })
    default:
    return state
  }
}
