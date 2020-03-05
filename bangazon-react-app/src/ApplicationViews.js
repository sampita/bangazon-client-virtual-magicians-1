import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import Home from './components/home/Home.js'
import SellForm from './components/home/ProductForm'
import ProductDetail from './components/home/ProductDetails'
import Location from './components/home/Location'
import Register from './components/auth/register.js';
import UserProfile from './components/home/UserProfile.js';
import UserPaymentForm from './components/home/UserPaymentForm.js';
import UserPaymentList from './components/home/UserPaymentList.js';
import Login from './components/auth/login.js';



class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route exact path="/register" render={(props) => {
                    return <Register 
                                {...props}
                                {...this.props}/>
                }} />

                <Route exact path="/login" render={(props) => {
                    return <Login
                                {...props}
                                {...this.props}/>
                }} />

                <Route exact path="/myprofile" render={(props) => {
                    if (this.props.isAuthenticated()) {
                        return <UserProfile
                                    {...props}
                                    {...this.props}
                         /> 
                        } else {
                            return <Redirect to="/login"/>
                        }
                }} />

                <Route exact path="/sell" render={(props) => {
                    if (this.props.isAuthenticated()) {
                        return <SellForm 
                                {...props}/>
                        } else {
                            return <Redirect to="/login"/>
                        }
                }} />

                <Route exact path="/product/:productId(\d+)" render={props => {
                    return <ProductDetail 
                                {...props} 
                                // addToOrder= {this.props.addToOrder}
                                />
                }}/>

                <Route exact path="/location" render={(props) => {
                    return <Location />
                }} />

                <Route exact path="/paymentform" render={(props) => {
                    return <UserPaymentForm 
                                {...props}
                                />
                }} />

                <Route exact path="/paymentlist" render={(props) => {
                    return <UserPaymentList
                                {...props}
                                />
                }}  />
                
            </React.Fragment>
        )
    }
}

export default ApplicationViews;