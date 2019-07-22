import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAlsUYRDznmevZrqBUWCPG-6hb_TK0U-xU",
  authDomain: "react-redux-60e25.firebaseapp.com",
  databaseURL: "https://react-redux-60e25.firebaseio.com",
  projectId: "react-redux-60e25",
  storageBucket: "react-redux-60e25.appspot.com",
  messagingSenderId: "234766328829"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
