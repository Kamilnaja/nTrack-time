import React, { Component } from 'react';
import Header from './partials/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <button onClick={startCounter}>Start</button>
                <button onClick={stopCounter}>Stop</button>
                <div>Time </div>
            </div>
        );
    }
}
var time;
function startCounter () {
    time = setInterval(() => {
        console.log('time');
    }, 500)
}

function stopCounter () {
    clearInterval(time);
}

function resetCounter () {
    time = 0;
}

export default App;
