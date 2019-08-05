import React from 'react';
import Topic from './Topic';

const subreddits = props => {
    const topics = props.topics ? props.topics.map((topic, index) => <Topic key={index} author={topic.author} title={topic.title} url={topic.url} />) : null;

    return (
        <div>
            <span><b>{`/r/${props.name}`}</b></span> - <i onClick={props.onDeleteClick}>Delete</i>
            {topics}
        </div>
    );
};

export default subreddits;