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
export const guessButton = button => ({
  type: SUBMIT_RESPONSE,
  button
});
