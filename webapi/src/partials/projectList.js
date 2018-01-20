import React, { Component } from 'react';
import axios from 'axios';
import config from './../utils/time-tracker';

export default class ProjectList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            projects: []
        }
    }
    componentDidMount () {
        axios
            .get(`${config.localUrl}/api/projects`)
            .catch((error) => {
                console.log(error);
                return
            })
            .then(res => {
                this.setState({projects: res.data})
            })
    }
    render () {
        return (
            <div className="project-list">
                <h1 className="">Wybierz projekt</h1>
                <select>
                    {this.state.projects.map((data, i) => {
                        return (
                            <option key={i}>{data.project}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}   