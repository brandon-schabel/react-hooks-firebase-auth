import React, { useState } from "react"
import firebase from "../../firebase"
import {emailPassSignIn, googleSignIn} from '../../firebase/helpers'
import { Link } from "react-router-dom";
import {ROUTES } from '../../constants/routes' 

const index = () => {
  const [email, updateEmail] = useState('')
  const [pass, updatePass] = useState('')

  return (
    <div>
      <input onChange={(e) => updateEmail(e.target.value)}></input>
      <input type="password" onChange={(e) => updatePass(e.target.value)}></input>
      <button onClick={() => emailPassSignIn(email, pass)}>Sign in</button>
      <button onClick={googleSignIn}>Google Sign In</button>
      <Link to={ROUTES.FORGOT_PASS}>Forgot Password</Link>
      <Link to={ROUTES.SIGN_UP}>Don't have an account?</Link>
    </div>
  )
}

export default index
