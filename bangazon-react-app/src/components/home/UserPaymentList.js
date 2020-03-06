import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import UserPaymentCard from './UserPaymentCard'
import UserPaymentForm from './UserPaymentForm'

class UserPaymentList extends Component {

    state = {
        payment_types: [],
        loadingStatus: true,
    }

    componentDidMount() {
        APIManager.getAll("payment_types")
        .then((payment_types) => {
            this.setState({
                payment_types: payment_types,
                loadingStatus: false
            })
        })
    }

    deletePaymentType = (id) => {
        APIManager.delete("payment_types", id)
            .then(() => {
                APIManager.getAll("payment_types")
                    .then((newPaymentTypes) => {
                        console.log("newpaymenttypes", newPaymentTypes)
                        this.setState({
                            payment_types: newPaymentTypes
                        })
                    })
            })
    }

    render() {
        console.log("render in pymt list", this.state)

        return (
            <>
                <div>
                    <h3 className="pageTitle">My Payment Types</h3>
                    {this.state.payment_types.map(payment_type =>
                        <UserPaymentCard
                        key={payment_type.id}
                        payment_type={payment_type}
                        deletePaymentType={this.deletePaymentType}
                        {...this.props}
                        />
                    )}
                </div>
                <div>
                    <UserPaymentForm />
                </div>
            </>
        )
    }
}

export default UserPaymentList