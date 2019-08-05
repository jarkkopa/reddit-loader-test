import {combineReducers} from 'redux'
import subreddits from './subredditReducer'
import history from './historyReducer'

const reducers = combineReducers({subreddits, history});

export default reducers;