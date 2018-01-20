import React, { Component } from 'react';
import axios from 'axios';

export default class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:8080/api/reports')
            .catch((error) => {
                console.log(error);
            })
            .then(res => {
                this.setState({ posts: res.data });
            }
            )
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