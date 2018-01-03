import React, { Component } from 'react'
import { connect } from 'react-redux'

import MyRouter from '../router/router'

import Header from '../components/Header/Header'
import ListUsers from '../components/ListUsers/ListUsers'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MyRouter />
      </div>
    );
  }
}

export default App;