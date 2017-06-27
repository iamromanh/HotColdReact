// List the kind of actions Hot or Cold app needs

// newGame <== the new game button to start a new game

export const NEW_GAME  = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME
});

// enterNumber <== where the user enters a number
export const USER_INPUT = 'USER_INPUT'; //USER_INPUT
export const userInput = number => ({
  type: USER_INPUT,
  number
});

// guessButton <== the button click *not sure if this is considered an action?*
export const SUBMIT_RESPONSE = 'SUBMIT_RESPONSE';
export const guessButton = button => ({
  type: GUESS_BUTTON,
  button
});
