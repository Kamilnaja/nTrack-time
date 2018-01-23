import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataList from './partials/dataList';
import Header from './partials/Header';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";

const userReducer = (state = {
    name: 'Max',
    isRunning: "lorem ipsum"
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_IS_RUNNING":
            state = {
                ...state,
                isRunning: action.payload
            }
        
    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log("logged action", action);
    next(action);
}

const store = createStore(
    combineReducers({user: userReducer}),
    {},
    
);

store.subscribe(() => {
    console.log("Store updated! ", store.getState());
})

ReactDOM.render(
    <Provider store={store}>
    <App>
    </App>

    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
