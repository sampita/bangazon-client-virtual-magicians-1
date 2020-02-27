// Author: Sam Pita
// Purpose: This file contains the User Add Payment Form that will be rendered for logged-in users who click the "Add Payment" button

import React, { Component } from 'react'

class UserPaymentForm extends Component {
    state = {
        products: []
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    
    render() {
        return (
            <> 
                <form onSubmit={this.handleRegister}>
                <h3>Add Payment Type</h3>
                <fieldset>
                    <label>Merchant Name</label>
                    <input onChange={(evt) => this.handleInputChange(evt)}
                        placeholder="Ex: Visa"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label>Card Number</label>
                    <input onChange={(evt) => this.handleInputChange(evt)}
                        placeholder="Ex: 99999999999"
                        required />
                </fieldset>
                <fieldset>
                    <label>Expiration Date</label>
                    <input type="date" onChange={(evt) => this.handleInputChange(evt)}
                        required />
                </fieldset>
                </form>
            </>
        )
    }
}

export default UserPaymentForm