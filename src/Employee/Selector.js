import React, { Component } from "react";

import { MemoryRouter } from 'react-router'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Prompt
} from "react-router-dom";


import ShowList from './ShowList';
import SearchBar from './SearchBar';

import { EditorConnector } from './EditorConnector';

import EmployeeEditor from './EmployeeEditor';


const ConnectedEditor = EditorConnector(EmployeeEditor);

class HomePage extends Component {
    render() {
        return (<React.Fragment>
            <SearchBar />
            <ShowList />
        </React.Fragment>)
    }
}


export default class Selector extends Component {

    customGetUserConfirmation = (message, callback) => {
        callback(window.confirm(message));
    }

    render() {
        //return <Router>
        return <MemoryRouter getUserConfirmation={ this.customGetUserConfirmation }>
            <Prompt message={loc => `Do you want to navigate to ${loc.pathname}?`} />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/isolate" component={HomePage} exact={true} />
                <Route path="/isolate/edit/:id?" component={ConnectedEditor} />

            </Switch>
        </MemoryRouter>
        // </Router>
    }
}
