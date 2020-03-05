import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ProductItem extends Component {
  render() {
    return (
      <>
        
    •Name: <Link to={`/products/${this.props.item.id}`}>{this.props.item.name}</Link>  •Created At: {this.props.item.created_at} <br/>
    </>
    )
  }
}

export default ProductItem
