import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyA-TsT1lGT6HQIJVg0ttydxz36yXaODKcM",
  authDomain: "shopping-list-6e16b.firebaseapp.com",
  databaseURL: "https://shopping-list-6e16b-default-rtdb.firebaseio.com",
  projectId: "shopping-list-6e16b",
  storageBucket: "shopping-list-6e16b.appspot.com",
  messagingSenderId: "56217029691",
  appId: "1:56217029691:web:a284520a22258d9410601e",
  measurementId: "G-TQ7CPD45B4"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb=firebase.database()
export {firebaseAuth,firebaseDb}
