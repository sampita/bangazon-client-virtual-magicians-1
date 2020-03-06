// Author: this reders the home page where we plan to inster the Location feature and welcome screen

import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import ProductItem from './ProductItem'
// import './Home.css'


class Home extends Component {
  state = {
    products: []
  }


  componentDidMount() {
    APIManager.getAll('products?limit=20')
      .then((res) => {
        this.setState({ products: res })

      })
  }


  render() {
    return (
      <>

        <h1>Welcome To Bangazon</h1>
        <div id="products" className="all-products-container">
          <h2>Last 20 products</h2>

          {/* {this.state.products.map((item) => <ProductItem key={item.id} item={item} />)} */}
          
        </div>
        <br />
        <footer> Bangazooon! © 2020</footer>
      </>
    )
  }
}

export default Home
