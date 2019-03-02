import React, { useState } from "react"
import { FirebaseHelpers } from "../index"

const index = () => {
  // const [oldPass, updateOldPass] = useState('')
  const [newPass, updateNewPass] = useState("")
  const [verifyNewPass, updateVerifyNewPass] = useState("")

  const UpdatePassButton = (
    <button onClick={() => FirebaseHelpers.updatePassword(newPass)}>
      Update Password
    </button>
  )
  return (
    <div>
      {/* <input onChange={(e) => updateOldPass(e.target.value)}></input> */}
      <input type="password" onChange={e => updateNewPass(e.target.value)} />
      <input
        type="password"
        onChange={e => updateVerifyNewPass(e.target.value)}
      />

      {newPass === verifyNewPass ? (
        UpdatePassButton
      ) : (
        <div>Passwords Have Not Swiped Right On Each Other</div>
      )}
    </div>
  )
}

export default index
