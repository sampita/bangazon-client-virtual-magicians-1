import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import ProductItem from './ProductItem'

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
            <div id="products" className="all-products-container">
              <h2>All products</h2>
    
              {this.state.products.map((item) => <ProductItem key={item.id} item={item} />)}
              
            </div>
            <br />
            <footer> Bangazooon! © 2020</footer>
          </>
        )
    }
}

export default ShopList