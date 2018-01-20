import React, { Component } from 'react';
import Header from './Header';
import DataList from './dataList';
import ProjectList from './projectList';
import '../App';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.startCounter = this.startCounter.bind(this);
        this.stopCounter = this.stopCounter.bind(this);
        this.saveData = this.saveData.bind(this);
        this.state = { 
            isRunning: false,
            workTime: 0 
        }
    }

    time = 0; 
    startCounter() {
        if (this.state.isRunning === true) {
            return;
        } else {
            var workTime = this.state.workTime | 0;
            this.time = setInterval(() => {
                workTime++;
                this.setState({
                    workTime: workTime,
                    isRunning: true
                })
            }, 1000);
        }
        
    }

    stopCounter() {
        this.setState({
            isRunning: false,
            workTime: this.state.workTime
        })
        clearInterval(this.time);
    }
    
    resetCounter() {
        this.time = 0;
    }

    saveData() {
        console.log('saving');
    }
    render() {
        return (
            <div className="Buttons">
                <h3 className="actual-time">{this.state.workTime}</h3>
                <div className="btn-wrapper">
                {
                    !this.state.isRunning 
                    ? <button className="button" onClick={this.startCounter}>Start</button> 
                    : <button className="button" onClick={this.stopCounter}>Stop</button>
                }
                    
                   
                    <button 
                        className="button"
                        onClick={this.saveData}>Save data</button>
                </div>
            </div>
        );
    }
}

export default Buttons;
