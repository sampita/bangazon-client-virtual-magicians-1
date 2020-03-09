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
        
        render() {
            console.log('params', this.props.match.params)
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
                        {/* <button onClick={this.handleCartAdd}>
                            Add to Cart
                        </button> */}
                    </div>
                </article>
            </>
        )
    }
}

export default ProductDetail