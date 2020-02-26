import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class Register extends Component {

    state = {
        email: "",
        userName: "",
        firstName: "",
        lastName: "",
        password: "",
        verifyPassword: ""
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = event => {
        event.preventDefault()

        // Creates object with values from state
        const newUser = {
            "username": this.state.userName,
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password
        }

        // Makes a fetch call with newUser object as the body of the POST request
        this.props.registerUser(newUser)
            .then(() => this.props.history.push("/"))
    }

    render() {
        console.log("register props", this.props)
        return (
            <form className="form--login" onSubmit={this.handleRegister}>
                <h1>Create Account</h1>
                <fieldset>
                    {/* <label htmlFor="userName"> Username </label> */}
                    <input onChange={(evt) => this.handleInputChange(evt)}
                        id="userName"
                        type="text"
                        name="userName"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="firstName"> First Name </label> */}
                    <input onChange={this.handleInputChange}
                        id="firstName"
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="lastName"> Last Name </label> */}
                    <input onChange={this.handleInputChange}
                        id="lastName"
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="inputEmail"> Email address </label> */}
                    <input onChange={this.handleInputChange}
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="inputPassword"> Password </label> */}
                    <input onChange={this.handleInputChange}
                        id="password"
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="verifyPassword"> Verify Password </label> */}
                    <input onChange={this.handleInputChange}
                        id="verifyPassword"
                        type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                            Register
                    </button>
                </fieldset>
            </form>
        )
    }
}

export default Register