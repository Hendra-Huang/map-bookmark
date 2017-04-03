// @flow

import React, { Component } from 'react'
import firebase from 'firebase'

import Store from './app/config/Store'
import Router from './app/config/Router'

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <Store>
        <Router />
      </Store>
    )
  }
}

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
}

export default App
