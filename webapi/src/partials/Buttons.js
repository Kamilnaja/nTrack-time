import React, { Component } from 'react';
import '../App';
import axios from 'axios';

class Buttons extends Component {
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
                <h3 className="actual-time">{this.props.workTime}</h3>
                <div className="btn-wrapper">
                    {
                        !this.props.isRunning
                            ?
                            <section>
                                <button
                                    className="button"
                                    onClick={() => this.props.startCounter()}>Start</button>
                                <button
                                    className="button"
                                    onClick={() => this.props.resetTime()}
                                >Reset
                            </button>
                            </section>
                            :
                            <section>
                                <button
                                    className="button"
                                    onClick={() => this.props.stopCounter()}>Stop</button>
                                <button
                                    className="button"
                                    onClick={this.saveData}>
                                    Save data
                                </button>
                            </section>
                    }



                </div>
            </div>
        );
    }
}

export default Buttons;
