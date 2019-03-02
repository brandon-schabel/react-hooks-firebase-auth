import React, { useState } from "react"
import { FirebaseHelpers, Firebase } from "../index"

const index = () => {
  const [email, updateEmail] = useState("")
  const handleUpdateEmail = (e: any) => updateEmail(e.target.value)

  return (
    <div>
      <input onChange={handleUpdateEmail} />
      <button onClick={() => FirebaseHelpers.passwordReset(email)}>Sign in</button>
    </div>
  )
}

export default index
