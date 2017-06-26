// List the kind of actions Hot or Cold app needs

// newGame <== the new game button to start a new game

export const NEW_GAME  = 'NEW_GAME';
export const newGame = game => ({
  type: NEW_GAME,
  game
});

// enterNumber <== where the user enters a number
export const ADD_NUMBER = 'ADD_NUMBER';
export const addNumber = number => ({
  type: ADD_NUMBER,
  number
});

// guessButton <== the button click *not sure if this is considered an action?*
export const GUESS_BUTTON = 'GUESS_BUTTON';
export const guessButton = button => ({
  type: GUESS_BUTTON,
  button
});
