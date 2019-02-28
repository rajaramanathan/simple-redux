import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import {Dashboard} from './Dashboard';

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        );
    }
}

