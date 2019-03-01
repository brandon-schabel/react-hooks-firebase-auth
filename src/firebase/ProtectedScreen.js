import React, { PureComponent } from "react"
import FirebaseAuthContext from "./FirebaseAuthProvider"
import { Redirect } from "react-router"

class ProtectedScreen extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <FirebaseAuthContext.Consumer>
        {({ isUserSignedIn }) => {
          if (isUserSignedIn) {
            return children
          }
          return <Redirect to="/login" />
        }}
      </FirebaseAuthContext.Consumer>
    )
  }
}
