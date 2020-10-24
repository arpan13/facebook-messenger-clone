import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   //Get the config file from fire base by creating cloud firestore and paste here every thing will work fine
  }

const firebaseApp=firebase.initializeApp(firebaseConfig);

//intialize database

const db=firebaseApp.firestore();

export default db;
