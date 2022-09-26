import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZHFT118YOkJVpMgFGBv45R0B_HP7a86g",
  authDomain: "react-native-firebase-85088.firebaseapp.com",
  projectId: "react-native-firebase-85088",
  storageBucket: "react-native-firebase-85088.appspot.com",
  messagingSenderId: "550553890693",
  appId: "1:550553890693:web:65c1a00078bf9e18cc9eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export default {
    db,
    firebase
}