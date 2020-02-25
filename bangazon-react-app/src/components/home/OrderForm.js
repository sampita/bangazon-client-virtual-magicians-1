import React, { Component } from 'react'


class SellForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        price: null,
        description: '',
        quantity: '',
        price: '',
        errormessage: ''
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if (nam === "price") {
        if (val !="" && !Number(val)) {
          err = <strong>Your price must be a number</strong>;
        }
      }
      this.setState({errormessage: err});
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form>
        <h1>Sell your stuff form</h1>
        <p>Product name:</p>
        <input
          type='text'
          name='name'
        //   value={product.name}
          onChange={this.myChangeHandler}
        />
        <p>Price:</p>
        $<input
          type='text'
          name='price'
          //   value={product.price}
          onChange={this.myChangeHandler}
        />
        {this.state.errormessage}
        <p>Description:</p>
        <input
          type='text'
          name='description'
          //   value={product.description}
          onChange={this.myChangeHandler}
        />
        <p>Quantity:</p>
        <input
          type='number'
          name='quantity'
          //   value={product.quantity}
          onChange={this.myChangeHandler}
        />
        <p>Looking for a local pickup? Enter your city!</p>
        <input
          type='text'
          name='location'
          //   value={product.location}
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }  

 export default SellForm