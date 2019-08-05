import React, { useState } from 'react';

const UrlInput = (props) => {
    const [input, setInput] = useState('programming');

    return (
        <div>
            <p>Subreddit loader</p>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() => props.onSubmit(input)}>Send</button>
        </div>
    );
};

export default UrlInput;