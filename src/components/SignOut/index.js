import React from 'react'
import {FirebaseHelpers} from '../index'


const index = () => {
  return (
    <button onClick={FirebaseHelpers.signOutUser}>
      Sign Out
    </button>
  )
}

export default index
