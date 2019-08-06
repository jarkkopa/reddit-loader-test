import React from 'react';
import HistoryItems from './HistoryItems';

const history = props => {
    return (
        <div className="History">
            <div>Loading history:</div>
            <HistoryItems/>
        </div>
    );
}

export default history;