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
            .get('https://jsonplaceholder.typicode.com/todos')
            .catch((error) => {
                console.log(error);
            })
            .then(res => {
                    this.setState({posts: res.data});
                    console.log(this.state.posts);
                }
            )
    }
    render() {
        return (
            <div className="data-list">
                <h1>Data list</h1>
                <ul >
                    {this.state.posts.map((data, i) => {
                        return (
                            <li key={i}>{data.id}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}