import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA71KE0SHHKMgaN4iA-U3-jSnjdCCNSDGw",
    authDomain: "re-fresh-db.firebaseapp.com",
    databaseURL: "https://re-fresh-db.firebaseio.com",
    projectId: "re-fresh-db",
    storageBucket: "",
    messagingSenderId: "468685410527",
    appId: "1:468685410527:web:4528cf0fec8e90d7dfd96a",
    measurementId: "G-VZGWB55JB6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;