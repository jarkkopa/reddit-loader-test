import { actionTypes } from '../actions';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.receiveSubreddit:
            if (state.indexOf(action.subreddit) === -1) {
                return [...state, action.subreddit];
            }
            return state;

        default:
            return state;
    }
};

export default reducer;