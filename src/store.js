import { applyMiddleware, createStore, compose } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, logger);

/*

const storeDraft = {
    subreddits: {
        programming: {
            loading: false,
            topics: [{
                author: 'aaa',
                title: 'title',
                url: 'http...'
            }]
        },
        webdev: {
            loading: false,
            topics: [{
                author: 'aaa',
                title: 'title',
                url: 'http...'
            }]
        }
    },
    history: ['programming', 'webdev']
}

*/

export default createStore(reducer, composeEnhancers(middleware));