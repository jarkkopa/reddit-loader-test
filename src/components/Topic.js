import React from 'react';

const topic = (props) => {
    return (
        <div>
            <a href={props.url}>{props.title}</a>
            <p>Author: {props.author}</p>
        </div>
    );
};

export default topic;