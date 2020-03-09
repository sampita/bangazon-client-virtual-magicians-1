// Author: Sam Pita
// Purpose: This file manages the user authentication, registration, login, and logout functions.

import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Logo from "./bangazon-icon.png";
import './NavBar.css';
// import APIManager from '../../modules/APIManager'

class NavBar extends Component {
    // state = {
    //     search: ""
    // }

    // handleInputChange = (evt) => {
    //     let stateToChange = {}
    //     stateToChange[evt.target.id] = evt.target.value
    //     this.setState(stateToChange)

    //     // get from the API
    //     APIManager.getAll(`products?search=${this.state.search}`)
    //         .then((res) => {
    //             console.log("res=", res)

    //         })
    // }

    render() {
        return (
            <header>
                <nav id="navbar">
                    <ul className="navbar flex">
                        <li className="nav"><Link className="nav-link" to="/"><img src={Logo} alt={"bangazon logo"} id="smallLogo" /></Link></li>
                        {this.props.isAuthenticated() ?
                            <li className="nav"><Link className="nav-link" to="/sell">Sell</Link></li>
                            : null}
                        <li className="nav"><Link className="nav-link" to="/buy">Buy</Link></li>
                        <input type="text" id="search" placeholder="Search product keywords..." onInput={(evt) => this.props.handleInputChange(evt)}></input>
                        {this.props.isAuthenticated() ?
                            <>
                                <li className="nav"><Link className="nav-link" to="/mycart">Shopping Cart</Link></li>
                                <li className="nav"><Link className="nav-link" to="/myprofile">My Profile</Link></li>
                            </>
                            : <li className="nav"><Link className="nav-link" to="/login">Login</Link></li>
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;