import React, { Component } from 'react';
import Buttons from './partials/Buttons';
import ProjectList from './partials/projectList';
import AddProject from './partials/AddProject';
import './App.css';
class App extends Component {
    render () {
        return(
            <div>
                <Buttons></Buttons>
                <AddProject></AddProject>
                <ProjectList></ProjectList>
            </div>
        )
    }
}

export default App;
