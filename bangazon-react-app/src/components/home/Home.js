import React, { Component } from 'react'
// import './Home.css'


class Home extends Component {
  state = {
    products: []
  }

//   Eventually we might need this
//   componentDidMount() {


//         })

  }

  render() {
    return (
      <>
        <div id="products" className="all-products-container">
          <h1>This will contain our products list</h1>
        </div>
        <br />

        <section id="product-location">
          <div>
            <h2>This is where we will have product locations listed</h2>
          </div>
        </section>

        <footer> Bangazooon! © 2020</footer>
      </>
    )
  }
}

export default Home
