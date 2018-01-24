import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { userReducer } from './reducers/userReducer';

const store = createStore(
    combineReducers({ user: userReducer }),
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
