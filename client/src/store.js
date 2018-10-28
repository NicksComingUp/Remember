import reducers from './reducer';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

// one instance of store that can be share with the rest of the application
export const store = createStore(reducers, {}, applyMiddleware(thunk));
// export default store;


// placing this at the top level
// import axios from 'axios';
// creating the redux store and listener
// import reducers from './reducer';
// import { createStore, applyMiddleware  } from 'redux';
// import thunk from 'redux-thunk';

// const store = createStore(reducers, {}, applyMiddleware(thunk));
/*
  Going to use redux-thunk for the middleware
   flag which waits for api request to finish
*/
