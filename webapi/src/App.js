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
                    stopIsRunning={() => this.props.changeIsRunning(false)}
                    startIsRunning={() => this.props.changeIsRunning(true)}
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
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        },
        changeIsRunning: (value) => {
            console.log(this.state);
            let timeVal = 0;
            var time = setInterval(() => {
                // timeVal++;
                dispatch({
                    type: "SET_IS_RUNNING",
                    payload: value,
                    timePayload: timeVal++
                })
            }, 500)
        },
        resetTime: () => {
            dispatch({
                type: "RESET_TIME"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);