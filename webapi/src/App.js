import React, { Component } from 'react';
import Header from './partials/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <button>Start</button>
                <div>Time </div>
            </div>
        );
    }
}

export default App;
