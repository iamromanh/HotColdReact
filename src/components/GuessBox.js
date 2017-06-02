import React from 'react';

import HotorCold from './HotorCold';

import '../css/guessbox.css';

export default function GuessBox(props) {
  return (
    <div>
      <section className='game'>
        <h2 id='user-feedback'>Make your Guess!</h2>
        <form onSubmit={props.onSubmit}>
        <div className="field">
          <p className="control">
            <input
              placeholder="Enter your Guess"
              className="input is-medium"
              onChange={props.onChange}
              value={props.value}
              />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input
              className='button'
              type="submit"
              id='guessButton'
              name='submit'
              value='Guess'
              />
          </p>
        </div>
        </form>

        <p className='guessCount'>Guess #<span id='count'>{props.stateLength}</span>!</p>
        <ul id='guestList' className='guessBox'>
          {props.historyOfGuesses}
          {props.renderGuesses}
        </ul>
      </section>
    </div>
  )
}
