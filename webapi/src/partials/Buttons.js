import React, { Component } from 'react';
import '../App';
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
