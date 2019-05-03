import React, { Component } from 'react';
import '../index.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Home extends Component {

    state = {
        user_id: '',
        password: '',
        error_message: null
    };

    displayErrorMessage = () => {
        if (this.state.error_message) {
            return (
                <div className="error-message">
                    {this.state.error_message}
                </div>
            );
        }
    };

    updateField = event => {
        const name = event.target.name;
        this.setState({[name]: event.target.value, error_message: null});
    };

    attemptLogIn = () => {

        if (this.state.user_id.trim() === '' || this.state.password.trim() === '')
            return this.setState({error_message: 'User ID and password are required.'});

        if (this.state.user_id.trim() !== 'foo' || this.state.password !== 'bar') {
            return this.props.history.push('/login/error');
        }

        this.props.history.push('/coords');
    };

    render() {

        return (
            <div className="login-section">
                <h2>Please Sign-In</h2>
                <div className="form-group">
                    <input name="user_id" onChange={this.updateField} placeholder="User ID" className="form-control val-input" type="text"/>
                    <input name="password" onChange={this.updateField} placeholder="Password" className="form-control val-input" type="password"/>
                    <button onClick={this.attemptLogIn} className="btn btn-primary confirm-button">Log In</button>
                    {this.displayErrorMessage()}
                </div>
            </div>
        )
    }
}

export default withRouter(Home);