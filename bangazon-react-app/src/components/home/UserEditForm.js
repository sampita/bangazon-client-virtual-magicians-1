import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

class ProfileEditForm extends Component {
    
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address: ""
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateProfile = evt => {
        console.log("update ran")
        evt.preventDefault()
        const formUpdate = {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            address: this.state.location
        }
        APIManager.profile_update("customers", formUpdate)
        this.props.history.push("/myprofile")
    }

    componentDidMount() {
        APIManager.getAll("customers")
            .then((customer) => {
                this.setState({
                username: customer[0].user.username,
                first_name: customer[0].user.first_name,
                last_name: customer[0].user.last_name,
                email: customer[0].user.email,
                password: customer[0].user.password,
                address: customer[0].address
                })
            })
    }

    render() {
        console.log("props in edit form", this.props)
        console.log("state in render", this.state)
        return(
            <form className="form--login" onSubmit={this.updateProfile}>
                <h1>Edit Address</h1>
           
                <fieldset>
                    {/* <label htmlFor="location"> location </label> */}
                    <input onChange={this.handleInputChange}
                        id="location"
                        type="text"
                        name="location"
                        className="form-control"
                        placeholder="location"
                        value={this.state.address}
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                            Edit
                    </button>
                </fieldset>
            </form>
        )
    }
}

export default ProfileEditForm