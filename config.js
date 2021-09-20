import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCyGsY7b5figzq4n9wkBrpLWQbgZ0Nspc8",
    authDomain: "team-voting-app-bc236.firebaseapp.com",
    databaseURL: "https://team-voting-app-bc236-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-bc236",
    storageBucket: "team-voting-app-bc236.appspot.com",
    messagingSenderId: "63214607150",
    appId: "1:63214607150:web:f067e7d00834e36b05f8bf"
  };
// add SDK Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();