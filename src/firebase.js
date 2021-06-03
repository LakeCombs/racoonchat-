import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC6QE3HkfbhHnMQ5r9MVf_ZyAFSG7VEhkM",
  authDomain: "racoon-6aded.firebaseapp.com",
  projectId: "racoon-6aded",
  storageBucket: "racoon-6aded.appspot.com",
  messagingSenderId: "563767548087",
  appId: "1:563767548087:web:34624bcf4d3699f5f75532",
});

export default app;
