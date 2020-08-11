import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDUEirfhj0drAWaVrUgjE0-Zu1_jHLeeI8",
  authDomain: "fine-rite-279112.firebaseapp.com",
  databaseURL: "https://fine-rite-279112.firebaseio.com",
  projectId: "fine-rite-279112",
  storageBucket: "fine-rite-279112.appspot.com",
  messagingSenderId: "712123019930",
  appId: "1:712123019930:web:c4b3765ca5c4d1f4696523",
  measurementId: "G-C388DJYNGE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
