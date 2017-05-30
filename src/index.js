import React from 'react';
import ReactDOM from 'react-dom';
import HotorCold from './components/HotorCold';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css'
import './css/index.css';

ReactDOM.render(<HotorCold />, document.getElementById('root'));
registerServiceWorker();
