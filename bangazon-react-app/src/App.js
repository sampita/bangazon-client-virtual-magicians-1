import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationViews from './ApplicationViews.js'
import NavBar from './components/navbar/NavBar.js'

class Bangazon extends Component {
  render() {
    return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
}}

export default Bangazon;
