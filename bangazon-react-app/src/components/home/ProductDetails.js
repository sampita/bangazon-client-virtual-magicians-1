import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import { withRouter } from "react-router-dom";


class ProductDetail extends Component {
    // also this contains the form to add an itinerary item
    state = {
        product: []
    }

    componentDidMount() {
        this.getProduct()
    }

    getProduct = () => {
        this.props.isAuthenticated()

            ?
            APIManager.get("products", this.props.match.params.productId)
                .then((product) => {
                    this.setState({ product: product })
                })

            :
            APIManager.getNoAuth("products", this.props.match.params.productId)
                .then((product) => {
                    this.setState({ product: product })
                })

    }

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
        console.log("render in details", this.props)
        const { name, id, price, description, image_path } = this.state.product;

        return (
            <>
                <article>
                    <div>
                        <div>
                            <div>
                                <h3>
                                    {name}
                                </h3>
                            </div>
                            <img src={(`${image_path}`)} alt="Product Image" className="productImage" />
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

export default withRouter(ProductDetail)