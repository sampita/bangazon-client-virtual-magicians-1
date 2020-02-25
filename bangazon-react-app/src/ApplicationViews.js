import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import Home from './components/home/Home.js'
import SellForm from './components/home/OrderForm'
import Register from './components/auth/register.js';


class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route exact path="/register" render={(props) => {
                    return <Register 
                                {...props}/>
                }} />

                <Route exact path="/sell" render={(props) => {
                    if (this.props.user) {
                        return <SellForm />
                        } else {
                            return <Redirect to="/login" />
                        }
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews;