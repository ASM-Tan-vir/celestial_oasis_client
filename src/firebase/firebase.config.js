// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_XOq5djcFxFdDSTIuJJc6LJ331c_JBPY",
  authDomain: "hotel-room-web-861cf.firebaseapp.com",
  projectId: "hotel-room-web-861cf",
  storageBucket: "hotel-room-web-861cf.appspot.com",
  messagingSenderId: "358316790512",
  appId: "1:358316790512:web:4d16a52eb4b477bb4ea835",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
