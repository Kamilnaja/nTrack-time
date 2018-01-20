import React, { Component } from 'react';
import axios from 'axios';
import config from './../utils/time-tracker';

export default class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios
            .get(`${config.localUrl}/api/reports`)
            .catch((error) => {
                console.log(error);
                return
            })
            .then(res => {
                this.setState({ posts: res.data });
            })
    }
    render() {
        return (
            <div className="data-list">
                <h1>Data list</h1>
                <table>
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>Time logged</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td key={data.user}>{data.user}</td>
                                    <td key={i}>{data.time}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}