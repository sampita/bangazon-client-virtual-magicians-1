import React, { Component } from 'react'
import SearchItem from './SearchItem'


export class SearchResults extends Component {
  state = {
    searchResults: []
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props)
    this.setState({searchResults: this.props.searchResults})

    if (this.props.searchText === ""){
       this.props.history.goBack()
     }
  }


  render() {
    return (
      <>
        <h1>Search Results</h1>
        {this.state.searchResults.map((product) => 
        <SearchItem
         key={product.id} 
         product={product}
         {...this.props}
          />
        )}


      </>
    )
  }
}

export default SearchResults
