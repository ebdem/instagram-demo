import firebase from "firebase";
 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCI8P91cc6efp9jJ3WFF2MdFAgGNQbfi5U",
    authDomain: "instagram-clone-react-ebu.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-ebu.firebaseio.com",
    projectId: "instagram-clone-react-ebu",
    storageBucket: "instagram-clone-react-ebu.appspot.com",
    messagingSenderId: "86651046568",
    appId: "1:86651046568:web:208b714560d68f3632109d",
    measurementId: "G-P7ZWP2D6C9"

 });

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();


 export { db, auth, storage};