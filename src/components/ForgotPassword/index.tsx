import React, { useState } from "react"
import { FirebaseHelpers, Firebase } from "../index"

const index = () => {
  const [email, updateEmail] = useState("")

  console.log(Firebase)
  return (
    <div>
      <input onChange={e => updateEmail(e.target.value)} />
      <button onClick={() => FirebaseHelpers.passwordReset(email)}>Sign in</button>
    </div>
  )
}

export default index
