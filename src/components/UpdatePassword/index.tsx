import React, { useState } from "react"
import { FirebaseHelpers } from "../index"

const index = () => {
  const [newPass, updateNewPass] = useState("")
  const [verifyNewPass, updateVerifyNewPass] = useState("")

  const handleUpdateNewPass = (e: any) => updateNewPass(e.target.value)
  const handleUpdateVerifyPass = (e: any) => updateVerifyNewPass(e.target.value)

  const UpdatePassButton = (
    <button onClick={() => FirebaseHelpers.updatePassword(newPass)}>
      Update Password
    </button>
  )
  return (
    <div>
      <input type="password" onChange={handleUpdateNewPass} />
      <input
        type="password"
        onChange={handleUpdateVerifyPass}
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
