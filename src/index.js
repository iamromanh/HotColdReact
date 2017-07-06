import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './reducers/store'

import HotorCold from './components/HotorCold';
import registerServiceWorker from './registerServiceWorker';

import 'bulma/css/bulma.css'
import './css/index.css';

ReactDOM.render(
  <Provider store={store}>
    <HotorCold />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
