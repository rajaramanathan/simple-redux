import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'

import './App.css'
import {StoreDemo} from './StoreDemo';
import {ConnectDemo} from './ConnectDemo';

export class Dashboard extends Component {
    render() {
        return (
            <div id="app">
                <div id="dashboard">
                    <div className="menu">
                        <NavLink exact to="/store" >
                        Store demo
                        </NavLink>
                        <NavLink exact to="/connect">
                            Connect demo
                        </NavLink>
                    </div>
                    <div className="content">
                            <Route exact path="/store" component={StoreDemo} />
                            <Route exact path="/connect" component={ConnectDemo} />
                    </div>
                </div>
            </div>     
        );
    }
}