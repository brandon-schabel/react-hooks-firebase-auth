import React, { useState } from "react"
import firebase from "../firebase"
import { passwordReset } from "../firebase/helpers"

const index = () => {
  const [email, updateEmail] = useState("")

  console.log(firebase)
  return (
    <div>
      <input onChange={e => updateEmail(e.target.value)} />
      <button onClick={() => passwordReset(email)}>Sign in</button>
    </div>
  )
}

export default index
