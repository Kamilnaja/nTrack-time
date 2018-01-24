import React, { Component } from 'react';
import Buttons from './partials/Buttons';
import ProjectList from './partials/projectList';
import AddProject from './partials/AddProject';
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
                <AddProject></AddProject>
                <ProjectList></ProjectList>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        time: '',
        startCounter: () => {
            dispatch({
                type: 'START_COUNTER'
            })
            let timeVal = 0;
            this.time = setInterval(() => {
                dispatch({
                    type: "SET_TIMER_TIME",
                    timePayload: timeVal++
                })
            }, 500)
        },

        stopCounter: () => {
            clearInterval(this.time);
            dispatch({
                type: "STOP_COUNTER",
            })
        },

        resetTime: () => {
            dispatch({
                type: "RESET_TIME"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);