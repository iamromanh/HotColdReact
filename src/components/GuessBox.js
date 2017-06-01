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
            <input className="input is-medium" id='userGuess' type="text" name='userGuess' placeholder="Enter your Guess" onChange={props.onChange} value={props.value} />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input className='button' type="submit" id='guessButton' name='submit' value='Guess' />
          </p>
        </div>
        </form>

        <p className='guessCount'>Guess #<span id='count'>{props.stateLength}{props.value}</span>!</p>
        <ul id='guestList' className='guessBox'>
        </ul>
      </section>
    </div>
  )
}
