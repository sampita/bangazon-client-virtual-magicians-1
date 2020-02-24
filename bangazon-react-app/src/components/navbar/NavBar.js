import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './NavBar.css';

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
                        {/* { */}
                        {/* (this.props.user) ? */}
                            <li><Link className="nav-link" to="/sell">Sell</Link></li>
                            {/* : null} */}
                        <li><Link className="nav-link" to="/buy">Buy</Link></li>
                        <input type="text" placeholder="Search product keywords..."></input>
                        {/* Ternary statement */}
                        {/* { */}
                        {/* (this.props.user) ? */}
                            <li><Link className="nav-link" to="/mycart">Shopping Cart</Link></li>
                            {/* : null} */}
                        <li><Link className="nav-link" to="/myprofile">My Profile</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;