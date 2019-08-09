import React from 'react';
import { connect } from 'react-redux'
import { deleteSubreddit } from '../actions';

import Topic from './Topic';

const Subreddits = props => {
    const topics = props.topics ? props.topics.map((topic, index) => <Topic key={index} author={topic.author} title={topic.title} url={topic.url} />) : null;

    return (
        <div>
            {props.loading ? <span>Loading: </span> : null}
            <b>{`/r/${props.name}`}</b> - <button onClick={() => props.deleteSubreddit(props.name)}>Delete</button>
            {topics}
        </div>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        deleteSubreddit: (subreddit) => { dispatch(deleteSubreddit(subreddit)) },
    }
};

export default connect(null, mapDispatchToProps)(Subreddits)