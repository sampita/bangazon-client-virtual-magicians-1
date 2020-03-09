import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ShoppingCart.css'
import APIManager from '../../modules/APIManager'

export class ShoppingCart extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        //get logged-in user's open order
        APIManager.getAll("orders/cart")
        .then((productsArray) => {
            // console.log("shopping cart products", products)
            this.setState({
                products: productsArray
            })
        })
    }

    render() {
        return (
            <>
                <h3 className="pageTitle">My Shopping Cart</h3>
                <main id="cartContainer">
                    <ul className="flexItem">
                        {this.state.products.map(product =>
                            <li key={product.id}>
                                <span className="block" id="productName">{product.name}</span>
                                <span className="block">Description: {product.description}</span>
                                <span className="block">Quantity: {product.quantity}</span>
                                <span className="block">Price: {product.price}</span>
                            </li>
                        )}
                    </ul>
                    <button className="flexItem" id="completeOrderButton"><Link to="/payment">Complete Order</Link></button>
                </main>
            </>
        )
    }
}

export default ShoppingCart