import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9RfDTtH1CtCWuqYr82sXI51c_24cFYVk",
    authDomain: "clone-cdbc5.firebaseapp.com",
    projectId: "clone-cdbc5",
    storageBucket: "clone-cdbc5.appspot.com",
    messagingSenderId: "263064655999",
    appId: "1:263064655999:web:82ae160b9145642d64c74a"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

export {db, auth};