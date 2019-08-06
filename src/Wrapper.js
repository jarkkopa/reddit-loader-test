import React from 'react';
import { hot } from 'react-hot-loader';

import App from './containers/App';

class Wrapper extends React.Component {
    render() {
        return (
            <React.Fragment>
                <App />
            </React.Fragment>
        )
    }
}

export default hot(module)(Wrapper);