import React, { Component } from "react"
import APIManager from "../../modules/APIManager"

class ProductDetail extends Component {
    // also this contains the form to add an itinerary item
    state = {
        product: []
    }

    componentDidMount() {
        this.getProduct()
    }

    getProduct = () => {
        APIManager.get("products", this.props.match.params.productId)
            .then((product) => {
                this.setState({ product: product })
            })
    }

    // handleCartAdd = () => {
    //     this.props.addToOrder(this.state.product.id)

    // }
    handleCartAdd = () => {
        const newItemToOrder = {
            product_id: this.state.product.id 
        };
        APIManager.post('orders', newItemToOrder)
            .then(console.log("test post", newItemToOrder))
            .then(() => {
                this.props.history.push("/mycart")
            })
    }

    render() {
        console.log("props details", this.props)
        console.log("state", this.state)
        const { name, id, price, description } = this.state.product;

        return (
            <>
                <article>
                    <div>
                        <div>
                            <div>
                                <a>
                                    {name}
                                </a>
                            </div>
                            <div>
                                <h2>${price}</h2>
                            </div>
                        </div>
                        <p>{description}</p>
                        {this.props.isAuthenticated() ?
                        <button onClick={this.handleCartAdd}>
                            Add to Cart
                        </button>
                        : null    
                    }
                    </div>
                </article>
            </>
        )
    }
}

export default ProductDetail