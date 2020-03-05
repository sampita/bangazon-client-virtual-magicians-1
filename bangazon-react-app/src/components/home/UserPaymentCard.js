import React, { Component } from 'react';

// component defining what the animal card will look like on the dom - populated with data from the fetch call - notice structure inside the render function is html

// includes link tag to call the path for specific animal defined in AnimalDetails.js path

// has button calling the deleteAnimal function as well

class UserPaymentCard extends Component {
  render() {
    return (
    <div className="card-content">
        <h2>Payment Method: {this.props.payment_type.merchant_name}</h2>
        <p>Expiration Date: {this.props.payment_type.expiration_date}</p>
        <button type="button" onClick={() => this.props.deletePaymentType(this.props.payment_type.id)}>Delete</button>
    </div>
    );
  }
}

export default UserPaymentCard;