import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'


const ApplicationViews = () => (
      <React.Fragment>
        <Route exact path="/"
          return <Home />
      </React.Fragment>
    )

export default ApplicationViews