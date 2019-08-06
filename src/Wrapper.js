import React from 'react';
import { hot } from 'react-hot-loader';

import App from './containers/App';

class Wrapper extends React.Component {
    render() {
        return(
            <div>
               <App></App>
            </div>
        )
    }
}

export default hot(module)(Wrapper);