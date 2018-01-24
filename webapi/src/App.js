import React, { Component } from 'react';
import Buttons from './partials/Buttons';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <Buttons
                    stopCounter={() => this.props.stopCounter()}
                    startCounter={() => this.props.startCounter()}
                    isRunning={this.props.user.isRunning}
                    workTime={this.props.user.workTime}
                    resetTime={() => this.props.resetTime()}
                > </Buttons>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

var timeVal = 0;
const mapDispatchToProps = (dispatch) => {
    return {
        startCounter: () => {
            dispatch({
                type: 'START_COUNTER'
            })
            const instance = this;
            instance.time = setInterval(() => {
                dispatch({
                    type: "SET_TIMER_TIME",
                    timePayload: timeVal++
                })
            }, 1000)
        },

        stopCounter: () => {
            const instance = this;
            clearInterval(instance.time);
            dispatch({
                type: "STOP_COUNTER",
            })
        },

        resetTime: () => {
            const instance = this;
            clearInterval(instance.time);
            timeVal = 0;
            dispatch({
                type: "RESET_TIME",
                timePayload: 0
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);