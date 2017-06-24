// List the kind of actions Hot or Cold app needs

// newGame <== the new game button to start a new game

export const NEW_GAME  = 'NEW_GAME';
export const newGame = game => ({
  type: NEW_GAME,
  game
});

// userFeedback <== the feedback printed to the scrren for the user i.e 'Hot, cold, ice ice baby'
export const USER_FEEDBACK = 'USER_FEEDBACK';
export const userFeedback = feedback => ({
  type: USER_FEEDBACK,
  feedback
});

// enterNumber <== where the user enters a number
export const ENTER_NUMBER = 'ENTER_NUMBER';
export const enterNumber = number => ({
  type: ENTER_NUMBER,
  number
});

// guessButton <== the button click *not sure if this is considered an action?*
export const GUESS_BUTTON = 'GUESS_BUTTON';
export const guessButton = button => ({
  type: GUESS_BUTTON,
  button
});

// guessCount <== the number of guesses taken by the user
export const GUESS_COUNT = 'GUESS_COUNT';
export const guessCount = count => ({
  type: GUESS_COUNT,
  count
});

// historyOfGuesses <== the history of guesses from a user
export const HISTORY_GUESSES = 'HISTORY_GUESSES';
export const historyGuesses = guesses => ({
  type: HISTORY_GUESSES,
  guesses
});
