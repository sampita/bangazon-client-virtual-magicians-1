import React, { Component } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import Home from './components/home/Home.js'
import SellForm from './components/home/ProductForm'
import ProductDetail from './components/home/ProductDetails'
import Location from './components/home/Location'
import Register from './components/auth/register.js';
import UserProfile from './components/home/UserProfile.js';
import UserPaymentList from './components/home/UserPaymentList.js';
import SearchResults from './components/home/SearchResults'
import Login from './components/auth/login.js';
import ProfileEditForm from './components/home/UserEditForm';
import ShoppingCart from './components/home/ShoppingCart.js';
import ShopList from './components/home/ShopList.js';
import ThankYou from './components/home/ThankYou.js';



class ApplicationViews extends Component {
    state = {
        counter: 0
    }


    componentDidUpdate(prevProps) {

        if (prevProps.searchText !== this.props.searchText) {
            if (this.props.searchText !== "") {
                this.props.history.push('/searchresults')
                this.setState({counter: this.state.counter++})
            } else {
                // this.props.history.goBack()
                // this.props.history.go(-`${this.state.counter}`)
                this.props.history.push('/')
                

            }
        }
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home 
                    {...props}
                    {...this.props} />
                }} />

                <Route exact path="/register" render={(props) => {
                    return <Register
                        {...props}
                        {...this.props} />
                }} />

                <Route exact path="/login" render={(props) => {
                    return <Login
                        {...props}
                        {...this.props} />
                }} />

                <Route exact path="/myprofile" render={(props) => {
                    if (this.props.isAuthenticated()) {
                        return <UserProfile
                            {...props}
                            {...this.props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/profile/update" render={props => {
                    if (this.props.isAuthenticated()) {
                        return <ProfileEditForm {...props} {...this.props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }} />

                <Route exact path="/sell" render={(props) => {
                    if (this.props.isAuthenticated()) {
                        return <SellForm
                            {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/products/:productId(\d+)" render={props => {
                    return <ProductDetail 
                                {...props}
                                {...this.props}
                                />
                }}/>

                <Route exact path="/location" render={(props) => {
                    return <Location />
                }} />

                <Route exact path="/searchresults" render={(props) => {
                    return <SearchResults
                        {...props}
                        {...this.props}
                    />
                }} />

                <Route exact path="/thankyou" render={(props) => {
                    return <ThankYou
                        {...props}
                        {...this.props}
                    />
                }} />

                <Route exact path="/payment" render={(props) => {
                    return <UserPaymentList
                        {...props}
                        {...this.props}
                    />
                }} />

                <Route exact path="/product" render={(props) => {
                    return <ShopList
                                {...props}
                                />
                }}  />

                <Route exact path="/mycart" render={(props) => {
                    if (this.props.isAuthenticated()) {
                        return <ShoppingCart
                            {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

            </React.Fragment>
        )
    }
}

 export default withRouter(ApplicationViews);
// export default ApplicationViews