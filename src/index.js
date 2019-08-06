import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import Wrapper from './Wrapper';

ReactDOM.render(
    <Provider store={store}>
        <Wrapper />
    </Provider>,
    document.getElementById('root')
);

