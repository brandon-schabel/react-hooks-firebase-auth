import React, { useState } from "react"
import firebase from "../firebase"

const index = () => {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const emailPassSignUp = async () => {
    try {
      await firebase.auth.createUserWithEmailAndPassword(email, password)
      // history.push("/protected")
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div>
      <button onClick={emailPassSignUp}>Sign Up</button>
      <input onChange={(e) => updateEmail(e.target.value)}></input>
      <input onChange={(e) => updatePassword(e.target.value)}></input>
    </div>
  )
}

export default index
