import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, getDocs} from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoKfgymBXnwKW2EY1DKUR8Ozj-pslxnbQ",
  authDomain: "clone-1ad71.firebaseapp.com",
  projectId: "clone-1ad71",
  storageBucket: "clone-1ad71.appspot.com",
  messagingSenderId: "31127392229",
  appId: "1:31127392229:web:e2c6f9a56cd7599f28290c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const provider = new GoogleAuthProvider();
const auth = getAuth()
export { app, db, collection, addDoc, provider, serverTimestamp, query, orderBy, getDocs, auth, signInWithPopup}