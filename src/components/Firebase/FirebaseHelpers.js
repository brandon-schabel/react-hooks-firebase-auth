import Firebase from "./index"

export const emailPassSignIn = async (email, pass) => {
  try {
    await Firebase.auth().signInWithEmailAndPassword(email, pass)
    // history.push("/protected")
  } catch (e) {
    alert(e)
  }
}

export const googleSignIn = async () => {
  const provider = new Firebase.auth.GoogleAuthProvider()
  try {
    await Firebase.auth().signInWithPopup(provider)
    // history.push("/protected")
    //Redirect('/account')
  } catch (e) {
    alert(e)
  }
}

export const emailPassSignUp = async (email, password) => {
  try {
    await Firebase.auth().createUserWithEmailAndPassword(email, password)
    // history.push("/protected")
  } catch (e) {
    alert(e)
  }
}

export const signOutUser = () => Firebase.auth().signOut()

export const passwordReset = email =>
  Firebase.auth().sendPasswordResetEmail(email)

export const updatePassword = password =>
  Firebase.auth().currentUser.updatePassword(password)
