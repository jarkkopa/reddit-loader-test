import { actionTypes } from '../actions';

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.fecthSubreddit:
            return {
                ...state,
                [action.subreddit]: {
                    ...state[action.subreddit], // Copy previous object with topics if exists
                    loading: true,
                    updated: Date.now()
                }
            };

        case actionTypes.receiveSubreddit:
            return {
                ...state,
                [action.subreddit]: {
                    topics: action.topics,
                    loading: false,
                    updated: Date.now()
                }
            };

        case actionTypes.deleteSubreddit:
            const newState = { ...state };
            delete newState[action.subreddit];
            return newState;

        default:
            break;
    }

    return state;
};

export default reducer;