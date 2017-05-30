import React from 'react';

import 'bulma/css/bulma.css'
import '../css/nav.css';

export default function Nav(props) {
  return (
    <div className='container'>
      <nav className='nav'>
        <div className='container'>
          <div className='nav-left'>
            <a className="nav-item"><span className='nav-text'>What?</span></a>
          </div>
          <div className='nav-right'>
            <a className="nav-item"><span className='nav-text'>+ New Game</span></a>
          </div>
        </div>
      </nav>
    </div>
  )
}
