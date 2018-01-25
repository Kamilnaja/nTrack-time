import React, { Component } from 'react';
import config from './../utils/time-tracker';

export default class DataList extends Component {
    render() {
        return (
            <div className="data-list">
                <h1>Data list</h1>
                <table>
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>Time logged</th>
                            <th>Projekt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td key={data.user}>{data.user}</td>
                                    <td key={data.time}>{data.time}</td>
                                    <td key={data.project}>{data.project}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}