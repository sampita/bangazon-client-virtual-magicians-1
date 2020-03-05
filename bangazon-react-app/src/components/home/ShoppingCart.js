import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ShoppingCart.css'

export class ShoppingCart extends Component {
    render() {
        return (
            <>
                <h3 className="pageTitle">My Shopping Cart</h3>
                <main id="cartContainer">
                    <ul className="flexItem">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                    <button className="flexItem" id="completeOrderButton"><Link to="/paymentform">Complete Order</Link></button>
                </main>
            </>
        )
    }
}

export default ShoppingCart