import React, { Component } from 'react'
import { Link } from "react-router-dom";
import user_icon from '../../images/user_icon.png'
import './UserProfile.css'
import APIManager from '../../modules/APIManager'

class UserProfile extends Component {
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        date_joined: ""
    }

    componentDidMount() {
        //get User name, email, payment info
        APIManager.getAll("customers")
        .then((customer) => {
            console.log("cdm", customer)
            this.setState({
                username: customer[0].user.username,
                first_name: customer[0].user.first_name,
                last_name: customer[0].user.last_name,
                email: customer[0].user.email,
                date_joined: customer[0].user.date_joined
            })
        })
        // .then((response) => console.log("UserProfile response", response))
    }

    render() {
        console.log("user profile render", this.state)
        return (
            <>
                <h3 className="pageTitle">My Profile</h3>
                <main id="profileContainer">
                    <img src={ user_icon } alt="default user icon" id="user_icon" />
                    <p className="flexEl">@{this.state.username}</p>
                    <p className="flexEl">{this.state.first_name} {this.state.last_name}</p>
                    <p className="flexEl">Member since {this.state.date_joined}</p>
                    <button className="flexEl profileButton">My Orders</button>
                    <button className="flexEl profileButton"><Link to="/paymentform">Add Payment Types</Link></button>
                    <button className="flexEl profileButton"><Link to="/paymentlist">Payment Options</Link></button>
                </main>
            </>
        )
    }
}

export default UserProfile;