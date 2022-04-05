import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOXkpG706XMPLvlvEGZIVyaWkCja80iak",
    authDomain: "dating-96756.firebaseapp.com",
    projectId: "dating-96756",
    storageBucket: "dating-96756.appspot.com",
    messagingSenderId: "29932269869",
    appId: "1:29932269869:web:24bc3e8d628b2747a6e3a4",
    measurementId: "G-TDN08J16SD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;