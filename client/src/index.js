// normal set up
import React from  'react';
import ReactDOM from 'react-dom';
import './style/css/main.css';
import App from './components/App';
// placing this at the top level
// import axios from 'axios';
// creating the redux store and listener
import reducers from './reducer';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from  'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk));

/*
  Going to use redux-thunk for the middleware
   flag which waits for api request to finish
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
