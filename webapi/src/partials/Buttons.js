import React, { Component } from 'react';
import '../App';
import axios from 'axios';

class Buttons extends Component {
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

                            </section>
                            :
                            <section>
                                <button
                                    className="button"
                                    onClick={() => this.props.stopCounter()}>Stop</button>

                            </section>
                    }
                    {
                        <div className="action-wrapper">
                            <button
                                className="button"
                                onClick={() => this.props.resetTime()}>
                                Reset
                        </button>
                            {
                                !this.props.isRunning &&
                                <button
                                    className="button"
                                    onClick={() => this.props.saveTime()}>
                                    Save time
                                </button>
                            }

                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Buttons;
