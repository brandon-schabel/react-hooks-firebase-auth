import React from "react"
import { Route, Switch } from "react-router"
import { Link } from "react-router-dom"

import { SignIn, SignUp, Account, ForgotPassword } from "./components"
import { ROUTES } from "./constants/routes"

function App() {
  return (
    <div className="App">
      <Link to={ROUTES.SIGN_IN}>
        <p>Sign In</p>
      </Link>
      <p />
      <Link to={ROUTES.SIGN_UP}>
        <p>Sign Up</p>
      </Link>
      <p />
      <Link to={ROUTES.ACCOUNT}>
        <p>Account</p>
      </Link>
      <p />
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.FORGOT_PASS} component={ForgotPassword} />
      </Switch>
    </div>
  )
}

export default App
