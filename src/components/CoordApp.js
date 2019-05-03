
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CoordApp extends Component {

    state = {
        latitude: 33.753746,
        longitude: -84.386330,
        error_message: null,
        results: null,
        user_welcomed: false
    };

    displayWelcome = () => {
        if (!this.state.user_welcomed) {

            return(
                <div className="welcome-message">
                    <h2>Login successful!</h2>
                    <p>You may now use the API below.</p>
                </div>
            );
        }
    };

    displayResults = () => {
      if (this.state.results) {
          return (
              <div className="results-section">
                  <h3>Location:</h3>
                  <p>{this.state.results.city}, {this.state.results.state}</p>
              </div>
          );
      }
    };

    getLocation = () => {
        const lon = this.state.longitude;
        const lat = this.state.latitude;
        const endpoint = 'https://api.weather.gov/points/' + lat + ',' + lon;
        this.setState({user_welcomed: true}); 

        axios.get(endpoint)
            .then(result => {

                const data = result.data;

                this.setState({
                    results: {
                        city: data.properties.relativeLocation.properties.city,
                        state: data.properties.relativeLocation.properties.state,
                    }
                });
            })
            .catch((err) => {
                this.setState({error_message: 'Unable to retrieve location: ' + err})
            });
    };

    updateField = event => {
      const name = event.target.name;
      this.setState({[name]: event.target.value, error_message: null, results: null, user_welcomed: true})
    };

    render() {
        return (
            <div className="coord-app">
                {this.displayWelcome()}
                <div className="coord-input-section">
                    <h2>Input Coords</h2>
                    <input value={this.state.latitude} name="latitude" onChange={this.updateField} className="form-control val-input" placeholder="Latitude" type="text"/>
                    <input value={this.state.longitude} name="longitude" onChange={this.updateField} className="form-control val-input" placeholder="Longitude" type="text"/>
                    <button onClick={this.getLocation} className="btn btn-primary confirm-button">Get Coords</button>
                    {this.state.error_message && <div className="error-message">{this.state.error_message}</div>}
                    {this.displayResults()}
                </div>
            </div>
        );
    }

}

export default withRouter(CoordApp);