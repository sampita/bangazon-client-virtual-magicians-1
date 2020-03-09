import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import ProductItem from './ProductItem'
import "./ProductItem.css"

class ShopList extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        APIManager.getAll('products')
      .then((res) => {
        this.setState({ products: res })

      })
    }

    render() {

        return (
            <>
            <h1>Welcome To Bangazon</h1>
            <h2>All products</h2>
            <div id="products" className="all-products-container flexContainer">
                {this.state.products.map((item) => <ProductItem key={item.id} item={item} />)}
            </div>
            <br />
            <footer> Bangazooon! © 2020</footer>
          </>
        )
    }
}

export default ShopList