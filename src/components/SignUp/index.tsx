import React, { useState } from "react"

import {emailPassSignUp} from '../firebase/helpers.js'

const index = () => {
  const [email, updateEmail] = useState('')
  const [pass, updatePass] = useState('')

  return (
    <div>
      <input onChange={(e) => updateEmail(e.target.value)}></input>
      <input onChange={(e) => updatePass(e.target.value)}></input>
      <button onClick={() => emailPassSignUp(email, pass)}>Sign Up</button>
    </div>
  )
}

export default index
