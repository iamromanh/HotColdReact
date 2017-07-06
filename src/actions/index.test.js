import React from 'react';

import { newGame, NEW_GAME, userInput, USER_INPUT, submitResponse, SUBMIT_RESPONSE } from './index';

describe('newGame', () => {
  it('should return the newGame action', () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
  })
})

describe('userInput', () => {
  it('should return the userInput action', () => {
    const input = 5;
    const action = userInput(input);
    expect(action.type).toEqual(USER_INPUT);
    expect(action.number).toEqual(input);
  })
})

describe('submitResponse', () => {
  it('should return the submitResponse action', () => {
    const guess = 6;
    const response = 'Very Very Cold';
    const action = submitResponse(guess, response);
    expect(action.type).toEqual(SUBMIT_RESPONSE);
    expect(action.guess).toEqual(guess);
    expect(action.response).toMatch(response);
  })
})
