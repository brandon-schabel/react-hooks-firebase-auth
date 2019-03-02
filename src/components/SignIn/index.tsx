import React, { useState } from "react"
import { Link } from "react-router-dom"

import { FirebaseHelpers } from "../index"
import { ROUTES } from "../../constants/routes"

const index = () => {
  const [email, updateEmail] = useState("")
  const [pass, updatePass] = useState("")

  return (
    <div>
      <input onChange={e => updateEmail(e.target.value)} />
      <input type="password" onChange={e => updatePass(e.target.value)} />
      <button onClick={() => FirebaseHelpers.emailPassSignIn(email, pass)}>Sign in</button>
      <button onClick={FirebaseHelpers.googleSignIn}>Google Sign In</button>
      <Link to={ROUTES.FORGOT_PASS}>Forgot Password</Link>
      <Link to={ROUTES.SIGN_UP}>Don't have an account?</Link>
    </div>
  )
}

export default index
