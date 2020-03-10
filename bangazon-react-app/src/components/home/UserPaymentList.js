import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import UserPaymentCard from './UserPaymentCard'
import UserPaymentForm from './UserPaymentForm'
import { withRouter } from "react-router-dom";

class UserPaymentList extends Component {

    state = {
        payment_types: [],
        open_order: [],
        loadingStatus: true,
    }

    handleRefresh = () => {
        APIManager.getAll("payment_types")
        .then((payment_types) => {
            this.setState({
                payment_types: payment_types,
                loadingStatus: false
            })
        })
    }

    componentDidMount() {
        this.handleRefresh()
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
        console.log("list props", this.props)
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
                    <UserPaymentForm
                    {...this.props}
                    handleRefresh={this.handleRefresh}
                    />
                </div>
            </>
        )
    }
}

export default withRouter(UserPaymentList)