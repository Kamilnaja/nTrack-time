import React, { Component } from 'react';
import axios from 'axios';

export default class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.project.value) {
            axios.post('http://localhost:8080/api/projects ', {
                project: this.project.value
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                })
                this.setState({
                    info: 'Dodano nowy projekt'
                })
        } else {
            this.setState({
                info: 'Proszę wpisać dane'
            })
        }
    }
    render() {
        return (
            <div className="add-project-section">
                <form onSubmit={this.onSubmit}>
                    <h2>Dodaj projekt</h2>
                    <input type="text" name="project_name"
                        ref={(input) => { this.project = input }} className="input" />
                    <button className="button" type="submit">Dodaj</button>
                    <div>
                        <div className="info-box">
                            {this.state.info}
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}