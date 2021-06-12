import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8thWcM3IFvaWVq4A986HpKyaEkTdIyaY",
  authDomain: "crwn-db-4ddfa.firebaseapp.com",
  projectId: "crwn-db-4ddfa",
  storageBucket: "crwn-db-4ddfa.appspot.com",
  messagingSenderId: "344148819726",
  appId: "1:344148819726:web:0ca6f8d600bae02ebe215f",
  measurementId: "G-791RV2L7HQ",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
