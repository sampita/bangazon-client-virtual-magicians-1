// Author: Sam Pita
// Purpose: This file manages the user authentication, registration, login, and logout functions.

const isAuthenticated = () => {
    return sessionStorage.getItem("bangazon_token") !== null
}

const register = (userInfo) => {
    return fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json())
        .then(res => {
            if ("token" in res) {
                sessionStorage.setItem("bangazon_token", res.token)
            }
        })
}

const login = (credentials) => {
    return fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
        .then(res => {
            if ("valid" in res && res.valid && "token" in res) {
                sessionStorage.setItem("bangazon_token", res.token)
            }
        })
}

const logout = () => {
    sessionStorage.removeItem("bangazon_token")
}