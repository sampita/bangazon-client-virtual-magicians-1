import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from './components/home/Home.js'
import SellForm from './components/home/OrderForm'
import Location from './components/home/Location'

class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route exact path="/sell" render={(props) => {
                    return <SellForm />
                }} />

                <Route exact path="/location" render={(props) => {
                    return <Location />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews;