import React, { useState } from "react"
import firebase from "../firebase"
//import Redirect from 'react-router'

const index = () => {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const emailPassSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      // history.push("/protected")
    } catch (e) {
      alert(e)
    }
  }


  const googleSignIn = async() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await firebase.auth().signInWithPopup(provider)
      // history.push("/protected")
      //Redirect('/account')
    } catch (e) {
      alert(e)
    }

  }

  console.log(firebase)
  return (
    <div>
      <input onChange={(e) => updateEmail(e.target.value)}></input>
      <input onChange={(e) => updatePassword(e.target.value)}></input>
      <button onClick={emailPassSignIn}>Sign in</button>
      <button onClick={googleSignIn}>Google Sign In</button>
    </div>
  )
}

export default index
