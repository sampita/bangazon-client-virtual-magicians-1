// Author: Sam Pita
// Purpose: This file contains the User Add Payment Form that will be rendered for logged-in users who click the "Add Payment" button

import React, { Component } from 'react'

class UserPaymentForm extends Component {
    state = {
        products: []
    }


    render() {
        return (
            <>
                <h3 className="pageTitle">Add Payment Type</h3>
                <section id="product-location">
                    <div>
                        <h2>This is home</h2>
                    </div>
                </section>
            </>
        )
    }
}

export default UserPaymentForm