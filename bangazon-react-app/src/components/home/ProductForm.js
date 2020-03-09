import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import { withRouter } from 'react-router-dom';


class SellForm extends Component {

    state = {
        name: "",
        price: 0,
        description: "",
        quantity: 0,
        location: "",
        imagePath: "",
        productTypeId: 1,
        producttypes: []
    }

    componentDidMount() {
        APIManager.getAll('product_types')
            .then(producttypes => {
                this.setState({ producttypes })
            })
    }

    handleFieldChange = evt => {
        if (evt.target.id === "price") {
            if (evt.target.value > 0 && evt.target.value <= 10000) {

                const stateToChange = {}
                stateToChange[evt.target.id] = evt.target.value
                this.setState(stateToChange)
            } else {
                alert("Amount needs to be between 1 to 10,000")
                evt.target.value = ""
            }
        } else {
            const stateToChange = {}
            stateToChange[evt.target.id] = evt.target.value
            this.setState(stateToChange)
        }}

        handleSubmit = event => {
            event.preventDefault()
            if (!event.target.checkValidity()) {
                return alert('Complete all fields')
            } else {
                const newProduct = {
                    name: this.state.name,
                    price: this.state.price,
                    description: this.state.description,
                    quantity: this.state.quantity,
                    location: this.state.location,
                    image_path: this.state.imagePath,
                    product_type_id: this.state.productTypeId
                }

                APIManager.post('products', newProduct)
                    .then((response) => {
                        this.props.history.push(`/products/${response.id}`)
                    })
            }
        }

        render() {
            return (
                <>
                    <h2>List a Product for Sell</h2>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <label
                                htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                onChange={this.handleFieldChange}
                                required />
                        </div>
                        <div>
                            <label
                                htmlFor="price">Price
                        </label>
                            <input
                                id="price"
                                type="number"
                                onChange={this.handleFieldChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="productTypeList">Product Type</label>
                            <select onChange={this.handleFieldChange} id="productTypeId">
                                {this.state.producttypes.map(type =>
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="description">Description
                        </label>
                            <input
                                id="description"
                                type="text"
                                onChange={this.handleFieldChange}
                                required />
                        </div>
                        <div>
                            <label
                                htmlFor="quantity">Quantity
                        </label>
                            <input
                                id="quantity"
                                type="number"
                                onChange={this.handleFieldChange}
                                required />
                        </div>
                        <div>
                            <label
                                htmlFor="location">City
                        </label>
                            <input
                                id="location"
                                type="text"
                                onChange={this.handleFieldChange}
                                required />
                        </div>
                        <div>
                            <label
                                htmlFor="imagePath">Image Path
                        </label>
                            <input
                                id="imagePath"
                                type="text"
                                onChange={this.handleFieldChange}
                                required />
                        </div>
                        <button>Submit</button>
                    </form>
                </>
            )
        }
    }
    export default withRouter(SellForm);