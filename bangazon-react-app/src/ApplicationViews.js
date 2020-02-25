import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from './components/home/Home.js'
import SellForm from './components/home/OrderForm'


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
            </React.Fragment>
        )
    }
}

export default ApplicationViews;