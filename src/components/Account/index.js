import React from "react"
// import firebase from "../../firebase"
// import ProtectedScreen from "../firebase"
// import FirebaseAuthProvider from  "../firebase"
import SignOut from '../SignOut'
import {ROUTES} from '../../constants/routes'
import { Link } from "react-router-dom";


const index = () => {
  return (
    <div>
      <SignOut></SignOut>
      <Link to={ROUTES.UPDATE_PASS}>Update Password</Link>
    </div>
  )
}

export default index;