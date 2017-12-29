import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListUsers from '../components/ListUsers/ListUsers'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListUsers />
      </div>
    );
  }
}

export default App;