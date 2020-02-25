// Author: Cassie Boyd
// Location module filters products by location

import React, { Component } from 'react'

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Nashville'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('You chose: ' + this.state.value);
      event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose your location:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="nashville">Nashville</option>
                <option value="knoxville">Knoxville</option>
                <option value="tullahoma">Tullahoma</option>
                <option value="memphis">Memphis</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }

}

export default Location