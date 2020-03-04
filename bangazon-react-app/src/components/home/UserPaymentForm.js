// Author: Sam Pita
// Purpose: This file contains the User Add Payment Form that will be rendered for logged-in users who click the "Add Payment" button

import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

class UserPaymentForm extends Component {
    state = {
        merchant_name: "",
        acct_number: "",
        expiration_date: ""
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    
    handlePaymentSubmit = event => {
        event.preventDefault()

        // Creates object with values from state
        const newPaymentType = {
            "merchant_name": this.state.merchant_name,
            "acct_number": this.state.acct_number,
            "expiration_date": this.state.expiration_date,
            "created_at": Date.now()
        }

        // Makes a fetch call with newUser object as the body of the POST request
        APIManager.post("payment_types", newPaymentType)
        .then(() => this.props.history.push("/myprofile"))
            // .then((response) => console.log("response", response))
    }

    render() {
        console.log("form state", this.state)
        return (
            <> 
                <form onSubmit={this.handlePaymentSubmit}>
                <h3>Add Payment Type</h3>
                <fieldset>
                    <label>Merchant Name</label>
                    <input onChange={(evt) => this.handleInputChange(evt)}
                        id="merchant_name"
                        placeholder="Ex: Visa"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label>Card Number</label>
                    <input onChange={(evt) => this.handleInputChange(evt)}
                        id="acct_number"
                        placeholder="Ex: 99999999999"
                        required />
                </fieldset>
                <fieldset>
                    <label>Expiration Date</label>
                    <input type="date" onChange={(evt) => this.handleInputChange(evt)}
                        id="expiration_date"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                            Submit
                    </button>
                </fieldset>
                </form>
            </>
        )
    }
}

export default UserPaymentForm