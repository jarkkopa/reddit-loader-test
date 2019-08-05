import { applyMiddleware, createStore, compose } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, logger);

export default createStore(reducer, composeEnhancers(middleware));