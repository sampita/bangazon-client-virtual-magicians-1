// Author: Cassie Boyd
// Location module filters products by location

import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

class Location extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    locations: []
  };

  componentDidMount() {
    console.log("LOCATION: ComponentDidMount");
    APIManager.getAll("products").then(response => {
      const newLocations = [];
      for (const item of response) {
        newLocations.push(item.location);
      }
      const uniqueLocations = [...new Set(newLocations)]
      this.setState({
        locations: uniqueLocations,
        value: ""
      });
    });
  }

//   Updates state 
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

//   Currently a pop-up that shows which location was chosen. Will route to a ProductList later
  handleSubmit(event) {
    alert("You chose: " + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your location:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.locations.map((location, index) => (
              <option onClick={this.handleChange} key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Location;
