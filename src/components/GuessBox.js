import React from 'react';

import '../css/guessbox.css';

export default function GuessBox(props) {
  return (
    <div>
      <section className='game'>
        <h2 id='user-feedback'>{props.response}</h2>
        <form onSubmit={e => props.onSubmit(e)}>
          <div className='field'>
            <p className='control'>
              <input
                type="text"
                placeholder='Guess a number'
                className='input is-medium'
                onChange={props.onChange}
                value={props.value}
                />
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <input
                className='button'
                type='submit'
                id='guessButton'
                name='submit'
                value='Guess'
                />
            </p>
          </div>
        </form>

        <p className='guessCount'>Guess #<span id='count'>{props.historyOfGuesses.length}</span>!</p>
        <ul id='guestList' className='guessBox'>
          {props.historyOfGuesses.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </section>
    </div>
  )
}
