import firebase from "firebase"
import firestore from "firebase/firestore" //acts like a configuration file

var config = {
    apiKey: "AIzaSyBhm6DROx8vR17vJTHPtk9bH4qdPgOdhkU",
    authDomain: "just-landing-184419.firebaseapp.com",
    databaseURL: "https://just-landing-184419.firebaseio.com",
    projectId: "just-landing-184419",
    storageBucket: "just-landing-184419.appspot.com",
    messagingSenderId: "16524932111"
};
firebase.initializeApp(config);
export const database = firebase.firestore()
export const auth = firebase.auth()
