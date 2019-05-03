
import React from 'react';
import { withRouter } from 'react-router-dom';

const LoginIncorrect = props => (
    <div>
        <div className="error-section">
            <h2>The user ID / password does not match our records. </h2>
            <button onClick={() => props.history.push('/')} className="btn btn-primary confirm-button">Go Back</button>
        </div>
    </div>
);

export default withRouter(LoginIncorrect);