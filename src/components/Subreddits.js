import React from 'react';
import Topic from './Topic';

const subreddits = props => {
    const topics = props.topics ? props.topics.map((topic, index) => <Topic key={index} author={topic.author} title={topic.title} url={topic.url} />) : null;

    return (
        <div>
            {props.loading ? <span>Loading: </span> : null}
            <b>{`/r/${props.name}`}</b> - <button onClick={props.onDeleteClick}>Delete</button>
            {topics}
        </div>
    );
};

export default subreddits;