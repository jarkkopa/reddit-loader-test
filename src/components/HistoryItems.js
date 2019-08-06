import React from 'react';
import { connect } from 'react-redux'

const HistoryItems = (props) => {
    const history = props.history.map((sub, index) => <li key={index}>{sub}</li>);
    return (
        <ul>
            {history}
        </ul>
    );
};

const mapStateToProps = state => {
    return { history: state.history };
};

export default connect(mapStateToProps)(HistoryItems);