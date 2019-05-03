
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import {Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginIncorrect from './components/LoginIncorrect';
import CoordApp from "./components/CoordApp";
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => (<Home  />)} />
            <Route exact path='/login/error' render={() => (<LoginIncorrect  />)} />
            <Route exact path='/coords' render={() => (<CoordApp  />)} />
        </Switch>
    </Router>,
    document.getElementById('root'));









