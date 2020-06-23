import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Components from './components';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Components/>
    </Provider>,
    document.getElementById('root')
);
