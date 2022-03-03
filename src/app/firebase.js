// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, getDocs} from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoKfgymBXnwKW2EY1DKUR8Ozj-pslxnbQ",
  authDomain: "clone-1ad71.firebaseapp.com",
  projectId: "clone-1ad71",
  storageBucket: "clone-1ad71.appspot.com",
  messagingSenderId: "31127392229",
  appId: "1:31127392229:web:e2c6f9a56cd7599f28290c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const provider = new GoogleAuthProvider();
const auth = getAuth()
export { app, db, collection, addDoc, provider, serverTimestamp, query, orderBy, getDocs }