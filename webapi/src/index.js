import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataList from './partials/dataList';
import Header from './partials/Header';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Header></Header>
            <Route exact path="/" component={App} />
            <Route path="/datalist" component={DataList}></Route>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
