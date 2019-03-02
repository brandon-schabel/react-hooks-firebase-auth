import React, { useState } from "react"
import { Link } from "react-router-dom";

import {FirebaseHelpers} from '../index'
import {ROUTES} from '../../constants/routes'


const index = () => {
  const [email, updateEmail] = useState('')
  const [pass, updatePass] = useState('')

  return (
    <div>
      <input onChange={(e) => updateEmail(e.target.value)}></input>
      <input type="password" onChange={(e) => updatePass(e.target.value)}></input>
      <button onClick={() => FirebaseHelpers.emailPassSignUp(email, pass)}>Sign Up</button>
      <Link to={ROUTES.SIGN_IN}>Already have an account?</Link>
    </div>
  )
}

export default index
