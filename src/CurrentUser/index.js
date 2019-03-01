import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../firebase'

console.log(firebase)

const CurrentUser = () => {
  const { initialising, user } = useAuthState(firebase.auth());
  const login = () => {
    firebase.auth().signInWithEmailAndPassword('test@test.com', 'password');
  };
  const logout = () => {
    firebase.auth().signOut();
  };

  const googleLogin = () => {
    firebase.auth().signInWithPopup();
  }

  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }
  return <button onClick={login}>Log in</button>;
};

export { CurrentUser }