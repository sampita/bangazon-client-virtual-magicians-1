import React, { Component } from 'react';

// component defining what the animal card will look like on the dom - populated with data from the fetch call - notice structure inside the render function is html

// includes link tag to call the path for specific animal defined in AnimalDetails.js path

// has button calling the deleteAnimal function as well

class ShopCard extends Component {
  render() {
    console.log("shop card", this.props)
    return (
    <div className="card-content">
        {/* <h2>{this.props.product.name}</h2> */}
    </div>
    );
  }
}

export default ShopCard;