import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhf8j0gdkCYXxWMw3wVufaflY1Zdp9o9c",
  authDomain: "instagram-clone-c8e9b.firebaseapp.com",
  projectId: "instagram-clone-c8e9b",
  storageBucket: "instagram-clone-c8e9b.appspot.com",
  messagingSenderId: "636859831501",
  appId: "1:636859831501:web:be93f282af908787568584",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
