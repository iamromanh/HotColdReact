import React from 'react';

import { gameReducer } from './gameReducer';

import { newGame, userInput, submitResponse } from '../actions/index';

describe('newGame', () => {
  it('should start a new game', () => {
    let gameState = {
      guessesTaken: [1,2,3],
      currentGuess: 1,
      randomNumberGenerator: 2,
      response: 'Another Response'
    };
    gameState = gameReducer(gameState, newGame());
    expect(gameState.guessesTaken).toHaveLength(0);
    expect(gameState.currentGuess).toEqual('');
    expect(gameState.randomNumberGenerator).toBeGreaterThanOrEqual(0);
    expect(gameState.randomNumberGenerator).toBeLessThanOrEqual(100);
    expect(gameState.response).toEqual('Guess a number between 1 - 100');
  })
})

describe('userInput', () => {
  it('should change the user input', () => {
    let gameState = {
      currentGuess: ''
    };
    gameState = gameReducer(gameState, userInput(1));
    expect(gameState.currentGuess).toBe(1)
  })
})

describe('submitResponse', () => {
  it('should change the user response and guess', () => {
    let gameState = {
      guessesTaken: [1,2,3],
      currentGuess: 1,
      response: 'Another Response'
    };

    let newGuess = 5;
    let guessesTakenLength = gameState.guessesTaken.length;

    gameState = gameReducer(gameState, submitResponse(newGuess, 'Very Cold'));
    expect(gameState.currentGuess).toEqual('');
    expect(gameState.guessesTaken).toHaveLength(guessesTakenLength + 1);
    expect(gameState.guessesTaken[3]).toEqual(newGuess);
    expect(gameState.response).toMatch('Very Cold');
  })
})
