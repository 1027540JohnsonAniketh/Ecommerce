import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE_8HuZl4KUOg6RDa4nTXLP8hY_IrlwIE",
    authDomain: "myproject-29eeb.firebaseapp.com",
    projectId: "myproject-29eeb",
    storageBucket: "myproject-29eeb.appspot.com",
    messagingSenderId: "9466656760",
    appId: "1:9466656760:web:075c6af04403b3aab4880d",
    measurementId: "G-MQZBW8QJSV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };