import React, { Component } from 'react';
import Header from './partials/Header';
import DataList from './partials/dataList';
import ProjectList from './partials/projectList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.startCounter = this.startCounter.bind(this);
        this.stopCounter = this.stopCounter.bind(this);
        this.saveData = this.saveData.bind(this);
        this.state = { 
            isCounting: 'false',
            workTime: 0 
        }
    }

    toggleClass() {
        const currentState = this.state.isCounting;
        this.setState({isCounting: 'true'})
    }

    time = 0; 
    startCounter() {
        var workTime = 0;
        this.time = setInterval(() => {
            workTime++;
            console.log(workTime);
            this.setState({
                workTime: workTime
            })
        }, 1000);
        // this.setState.time = workTime;
    }

    stopCounter() {
        clearInterval(this.time);
        console.log('stopped')
    }
    
    resetCounter() {
        this.time = 0;
    }

    saveData() {
        console.log('saving');
    }
    render() {
        return (
            <div className="App">
                <Header></Header>
                <h3 className="actual-time">{this.state.workTime}</h3>
                <div className="btn-wrapper">
                    <button 
                        className="button" 
                        onClick={this.startCounter}>Start</button>
                    <button 
                        className="button"
                        onClick={this.stopCounter}>Stop</button>
                    <button 
                        className="button"
                        onClick={this.saveData}>Save data</button>
                </div>
                <ProjectList></ProjectList>
                <DataList></DataList>
            </div>
        );
    }
}

var time;




export default App;
