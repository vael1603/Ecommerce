// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfcK0UOQiK9pwg3ib2XHKaDOH8UQrETsY",
  authDomain: "ecommerce-a9378.firebaseapp.com",
  projectId: "ecommerce-a9378",
  storageBucket: "ecommerce-a9378.appspot.com",
  messagingSenderId: "251627594249",
  appId: "1:251627594249:web:8f385c2d9f85f230818ed8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;