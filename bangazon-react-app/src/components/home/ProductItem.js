import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductItem.css'

export class ProductItem extends Component {
  render() {
    return (
      <>
        <article id="flexContainer">
          <picture className="flexItem">
            <img src={(`${this.props.item.image_path}`)} alt="Product Image" className="productImage" />
          </picture>
          <h3 className="flexItem">
            <Link to={`/products/${this.props.item.id}`}>{this.props.item.name}</Link>
          </h3>
          <p className="flexItem">Price: ${this.props.item.price}</p>
          <p className="flexItem">Quantity Available: {this.props.item.quantity}</p>
        </article>
      </>
    )
  }
}

export default ProductItem
