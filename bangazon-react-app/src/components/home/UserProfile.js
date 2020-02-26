import React, { Component } from 'react'
import user_icon from '../../images/user_icon.png'
import './UserProfile.css'

class UserProfile extends Component {

    componentDidMount() {
        //get User name, email, payment into
    }

    render() {
        return (
            <>
                <h3 className="pageTitle">My Profile</h3>
                <main id="profileContainer">
                    <img src={ user_icon } alt="default user icon" id="user_icon" />
                    <p className="flexEl">First Name  Last Name</p>
                    <p className="flexEl">Member since:</p>
                    <button className="flexEl profileButton">My Orders</button>
                    <button className="flexEl profileButton">Add/Edit Payment Types</button>
                </main>
            </>
        )
    }
}

export default UserProfile;