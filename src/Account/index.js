import React, { Component } from 'react'
import firebase from '../firebase'

export default class index extends Component {
  render() {
    return (
      <div>
        Account
        {firebase.auth().currentUser.email}
      </div>
    )
  }
}
