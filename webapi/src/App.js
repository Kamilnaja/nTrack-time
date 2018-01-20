import React, { Component } from 'react';
import Buttons from './partials/Buttons';
import ProjectList from './partials/projectList';
import DataList from './partials/dataList';
import './App.css';
import Header from './partials/Header';
class App extends Component {
    render () {
        return(
            <div>
                <Header></Header>
                <Buttons></Buttons>
                <ProjectList></ProjectList>
                <DataList></DataList>
            </div>
        )
    }
}

export default App;
