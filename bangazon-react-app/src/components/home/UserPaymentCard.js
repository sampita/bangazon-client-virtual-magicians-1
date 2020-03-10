import React, { Component } from 'react';
import APIManager from '../../modules/APIManager'
import { withRouter } from "react-router-dom";

// component defining what the animal card will look like on the dom - populated with data from the fetch call - notice structure inside the render function is html

// includes link tag to call the path for specific animal defined in AnimalDetails.js path

// has button calling the deleteAnimal function as well


class UserPaymentCard extends Component {

  complete_order = () => {
    //get logged-in user's open order
    APIManager.getAll("orders")
    .then((thisOrder) => {
        console.log("shopping cart products", thisOrder)
        console.log("shopping cart payment type", this.props.payment_type.id)
        const completed_order = {
            payment_type_id: this.props.payment_type.id
        }
        APIManager.put("orders", completed_order, thisOrder[0].id)
            .then(console.log("order completed - check table"))
            .then(this.props.history.push("/thankyou"))
    })
  }


  render() {
    console.log("upc props", this.props)
    return (
    <div className="card-content">
        <h2>{this.props.payment_type.merchant_name}</h2>
        <p>Expiration Date: {this.props.payment_type.expiration_date}</p>
        <button type="button" onClick={() => this.props.deletePaymentType(this.props.payment_type.id)}>Delete</button>
        <button type="button" onClick={() => this.complete_order(this.props.payment_type.id)}>Pay With</button>
    </div>
    );
  }
}

export default withRouter(UserPaymentCard);