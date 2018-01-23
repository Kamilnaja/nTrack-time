import React, { Component } from 'react';
import Buttons from './partials/Buttons';
import ProjectList from './partials/projectList';
import AddProject from './partials/AddProject';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
    render () {
        return(
            <div>
                <Buttons 
                    changeUserName={() => this.props.setName("anna")} 
                    username={this.props.user.name}
                    changeIsRunning={() => this.props.changeIsRunning("true")}
                    isRunning={this.props.user.isRunning}
                    > </Buttons>
                <AddProject></AddProject>
                <ProjectList></ProjectList>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
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
            dispatch({
                type: "SET_IS_RUNNING",
                payload: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
