// Author: Sam Pita
// Purpose: This file manages the user authentication, registration, login, and logout functions.

import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './NavBar.css';
import { isAuthenticated, logout } from "../helpers/SimpleAuth"

class NavBar extends Component {

    handleLogout = () => {
        //clears user from localStorage and redirects to home page
        this.props.clearUser();
        this.props.history.push('/');
    }

    render() {

        return (
            <header>
                <nav>
                    <ul className="navbar flex">
                        {isAuthenticated() ?
                            <li className="nav"><Link className="nav-link" to="/sell">Sell</Link></li>
                            : null}
                        <li className="nav"><Link className="nav-link" to="/buy">Buy</Link></li>
                        <input type="text" placeholder="Search product keywords..."></input>
                        {isAuthenticated() ?
                            <li className="nav"><Link className="nav-link" to="/mycart">Shopping Cart</Link></li>
                            : null}
                        <li className="nav"><Link className="nav-link" to="/myprofile">My Profile</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;