// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAGPIH-nGL1WI54tJebZEkkQhHcyLgujQQ",
    authDomain: "digiicampus.firebaseapp.com",
    projectId: "digiicampus",
    storageBucket: "digiicampus.appspot.com",
    messagingSenderId: "1021546311004",
    appId: "1:1021546311004:web:183a6dbf82b37cedb9a599",
    measurementId: "G-8L4CVHGGGX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth , provider};
export default db;
