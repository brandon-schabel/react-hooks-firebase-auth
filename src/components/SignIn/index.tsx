import React, { useState } from "react"
import firebase from "../../firebase"
import {emailPassSignIn, googleSignIn} from '../../firebase/helpers'
import { Link } from "react-router-dom";

const index = () => {
  const [email, updateEmail] = useState('')
  const [pass, updatePass] = useState('')

  

  console.log(firebase)
  return (
    <div>
      <input onChange={(e) => updateEmail(e.target.value)}></input>
      <input onChange={(e) => updatePass(e.target.value)}></input>
      <button onClick={() => emailPassSignIn(email, pass)}>Sign in</button>
      <button onClick={googleSignIn}>Google Sign In</button>
      <Link to="/forgot-password">Forgot Password</Link>
    </div>
  )
}

export default index
