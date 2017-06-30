export const NEW_GAME  = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME
});

export const USER_INPUT = 'USER_INPUT';
export const userInput = number => ({
  type: USER_INPUT,
  number
});

export const SUBMIT_RESPONSE = 'SUBMIT_RESPONSE';
export const submitResponse = (guess, response) => ({
  type: SUBMIT_RESPONSE,
  guess,
  response
});

// export const SUBMIT_RESPONSE = 'SUBMIT_RESPONSE';
// export const submitResponse = (guessesTaken, currentGuess, response) => ({
//   type: SUBMIT_RESPONSE,
//   guessesTaken,
//   currentGuess,
//   response,
//
// });
