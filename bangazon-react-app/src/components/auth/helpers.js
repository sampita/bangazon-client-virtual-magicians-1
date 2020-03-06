const loginUser = (credentials) => {
    //logs in user, saves user token to sessionStorage, and sets state of user to True
    return fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
        // .then(res => {
        //     if ("valid" in res && res.valid && "token" in res) {
        //         console.log("res", res)
        //         sessionStorage.setItem("bangazon_token", res.token)
        //         this.props.history.push("/")
        //     }
        //     else window.alert('Incorrect username or password. Please try again.')
        // })
        // .then(() => this.setState({
        //     user: this.isAuthenticated()
        // }))
}

const registerUser = (userInfo) => {
    //creates user, saves user token to sessionStorage, and sets state of user to True
    return fetch("http://localhost:8000/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json())
        // .then(res => {
        //     console.log("res", res)
        //     if ("token" in res) {
        //         sessionStorage.setItem("bangazon_token", res.token)
        //     }
        // })
        // .then(() => this.setState({
        //     user: this.isAuthenticated()
        // }))
}

const logoutUser = () => {
    //clears user from sessionStorage
    sessionStorage.removeItem("bangazon_token");
}

const isAuthenticated = () => {
    return sessionStorage.getItem("bangazon_token") !== null
}


export { loginUser, registerUser, logoutUser, isAuthenticated }