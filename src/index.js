import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {startUsersList} from './Actions/UsersList'
import {startPostsList} from './Actions/PostsList'
import { startCommentsShow } from './Actions/CommentShow'

import configureStore from './Store/storeConfigure';

const store=configureStore()

store.dispatch(startUsersList())
// store.dispatch(startUserShow())
store.dispatch(startPostsList())
store.dispatch(startCommentsShow())

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
