import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import events from './events';

const reducer = combineReducers({
  events
});

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));

export default store;

export * from './events';
