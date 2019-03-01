import React, { useState, useEffect, createContext } from "react"

import firebase from "./index"

const defaultFirebaseContext = {
  authStatusReported: false,
  isUserSignedIn: false
}

export const FirebaseAuthContext = createContext(defaultFirebaseContext)

const FirebaseAuthProvider = ({children, }) => {
  const [userStatus, updateUserStatus] = useState(defaultFirebaseContext)

  useEffect(() => {
    firebase.auth.onAuthStateChanged(user =>
      updateUserStatus({
        authStatusReported: true,
        isUserSignedIn: !!user
      })
    )
  })

  const { children } = this.props
  const { authStatusReported, isUserSignedIn } = userStatus

  return (
    <FirebaseAuthContext.Provider
      value={{ isUserSignedIn, authStatusReported }}>
      {authStatusReported && children}
    </FirebaseAuthContext.Provider>
  )
}

export default FirebaseAuthProvider;