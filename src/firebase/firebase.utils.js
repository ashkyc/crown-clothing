import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQd06NpanLdLaMd7EJ4ZW5c6YUzKhK_ec",
  authDomain: "crown-clothing-4eb9c.firebaseapp.com",
  databaseURL: "https://crown-clothing-4eb9c.firebaseio.com",
  projectId: "crown-clothing-4eb9c",
  storageBucket: "crown-clothing-4eb9c.appspot.com",
  messagingSenderId: "583827033543",
  appId: "1:583827033543:web:1807e18d2b7079a8d21de2",
  measurementId: "G-3BBBC3ZM8H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
