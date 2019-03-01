import firebase from "./index"

export const emailPassSignIn = async (email, pass) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, pass)
    // history.push("/protected")
  } catch (e) {
    alert(e)
  }
}

export const googleSignIn = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    await firebase.auth().signInWithPopup(provider)
    // history.push("/protected")
    //Redirect('/account')
  } catch (e) {
    alert(e)
  }
}

export const emailPassSignUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    // history.push("/protected")
  } catch (e) {
    alert(e)
  }
}

export const signOutUser = () => firebase.auth().signOut()

export const passwordReset = email =>
  firebase.auth().sendPasswordResetEmail(email)

export const updatePassword = password =>
  firebase.auth().currentUser.updatePassword(password)
