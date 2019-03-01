import React from 'react'
import {signOutUser} from '../firebase/helpers'


const index = () => {
  return (
    <button onClick={signOutUser}>
      Sign Out
    </button>
  )
}

export default index
