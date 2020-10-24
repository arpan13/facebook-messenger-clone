import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhoHRCxknge2SjwbplW6-f7XZ1SM9Mwjs",
    authDomain: "facebook-messenger-clone-f30bf.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-f30bf.firebaseio.com",
    projectId: "facebook-messenger-clone-f30bf",
    storageBucket: "facebook-messenger-clone-f30bf.appspot.com",
    messagingSenderId: "738520897370",
    appId: "1:738520897370:web:e28de38fa384a6b2290563",
    measurementId: "G-JGX5GFFW72"
  }

const firebaseApp=firebase.initializeApp(firebaseConfig);

//intialize database

const db=firebaseApp.firestore();

export default db;