import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import {Provider} from 'react-redux'
import allReducers from "./components/reducers/index.js";
import {createStore} from "@reduxjs/toolkit";

const store = createStore (allReducers);



ReactDOM.render(
    <Provider store={store}>
            <Chat/>
    </Provider>,
    document.getElementById('root')
);
