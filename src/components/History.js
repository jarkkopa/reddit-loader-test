import React from 'react';

const history = props => {
    const history = props.history.map((sub, index) => <div key={index}>{sub}</div>);
    return (
        <div className="History">
            <div>Loaded:</div>
            {history}
        </div>
    );
}

export default history;