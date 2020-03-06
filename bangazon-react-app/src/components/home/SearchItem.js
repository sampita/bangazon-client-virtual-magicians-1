import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SearchItem extends Component {
  render() {
    return (
      <>
  •Name: <Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link> <br/>      
     </>
    )
  }
}

export default SearchItem
