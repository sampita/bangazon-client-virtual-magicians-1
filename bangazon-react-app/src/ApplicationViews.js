import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import Home from './components/home/Home.js'
import SellForm from './components/home/ProductForm'
import ProductDetail from './components/home/ProductDetails'
import Location from './components/home/Location'
import Register from './components/auth/register.js';
import UserProfile from './components/home/UserProfile.js';
import UserPaymentList from './components/home/UserPaymentList.js';
import Login from './components/auth/login.js';
import ProfileEditForm from './components/home/UserEditForm';
import ShoppingCart from './components/home/ShoppingCart.js';
import ShopList from './components/home/ShopList.js';



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
                                    {...this.props}/> 
                        } else {
                            return <Redirect to="/login"/>
                        }
                }} />

                <Route exact path="/profile/update" render={props => {
                    if (this.props.isAuthenticated()) {
                        return <ProfileEditForm {...props} {...this.props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}  />

                <Route exact path="/sell" render={(props) => {
                    if (this.props.isAuthenticated()) {
                        return <SellForm 
                                {...props}/>
                        } else {
                            return <Redirect to="/login"/>
                        }
                }} />

                <Route exact path="/products/:productId(\d+)" render={props => {
                    return <ProductDetail 
                                {...props} 
                                // addToOrder= {this.props.addToOrder}
                                />
                }}/>

                <Route exact path="/location" render={(props) => {
                    return <Location />
                }} />

                <Route exact path="/payment" render={(props) => {
                    return <UserPaymentList
                                {...props}
                                />
                }}  />

                <Route exact path="/product" render={(props) => {
                    return <ShopList
                                {...props}
                                />
                }}  />

                <Route exact path="/mycart" render={(props) => {
                    if (this.props.isAuthenticated()) {
                        return <ShoppingCart
                            {...props}/>
                        } else {
                            return <Redirect to="/login"/>
                        }
                }} />
                
            </React.Fragment>
        )
    }
}

export default ApplicationViews;