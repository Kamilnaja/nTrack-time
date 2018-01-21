import React, { Component } from 'react';
import '../App';
import axios from 'axios';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.startCounter = this.startCounter.bind(this);
        this.stopCounter = this.stopCounter.bind(this);
        this.saveData = this.saveData.bind(this);
        this.state = { 
            isRunning: false,
            workTime: 0,
            project: 'praca',
            user: 'Kamil'
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
        axios.post('http://localhost:8080/api/reports', {
            time: this.state.workTime,
            user: this.state.user,
            project: this.state.project
        })
        .then((res) => {
            console.log(res);
        })
        this.setState({
            info: 'zapisano'
        });
        this.stopCounter();
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
