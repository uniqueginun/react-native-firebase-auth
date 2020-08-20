import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB5kEyqdpUPv2iY8UeDgcELPNvi68jpixk",
  authDomain: "reactnative-firebase-exa-9bb15.firebaseapp.com",
  databaseURL: "https://reactnative-firebase-exa-9bb15.firebaseio.com",
  projectId: "reactnative-firebase-exa-9bb15",
  storageBucket: "reactnative-firebase-exa-9bb15.appspot.com",
  messagingSenderId: "355565461583",
  appId: "1:355565461583:web:df0cc57708d54fbf630a3a",
  measurementId: "G-NDJELMBPSZ",
};
// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig);

export default fireApp;
