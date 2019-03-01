import React from "react"
import firebase from "../firebase"
import ProtectedScreen from "../firebase"
import FirebaseAuthProvider from  "../firebase"
import SignOut from '../SignOut'


const index = () => {
  return (
    <div>
      <SignOut></SignOut>
    </div>
  )
}

export default index;