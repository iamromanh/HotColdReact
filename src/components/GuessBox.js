import React from 'react';

import HotorCold from './HotorCold';

import '../css/guessbox.css';

export default function GuessBox(props) {
  return (
    <div>
      <section className='game'>
        <h2 id='user-feedback'>Make your Guess!</h2>
        <div className="field">
          <p className="control">
            <input className="input text is-medium" type="text" name='userGuess' placeholder="Enter your Guess" />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input className='button' type="submit" id='guessButton' name='submit' value='Guess' />
          </p>
        </div>
      </section>
    </div>
  )
}
