import React from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { Route, Switch} from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/signin"><p>Sign In</p></Link><p></p>
      <Link to="/signup"><p>Sign Up</p></Link><p></p>
      <Switch>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </Switch>
    </div>
  )
}

export default App
