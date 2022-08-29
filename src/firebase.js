// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6nUBcMy72Fo80SaiG11v1aPA1RpYsQWw",
  authDomain: "u-mom-app-s-chat.firebaseapp.com",
  projectId: "u-mom-app-s-chat",
  storageBucket: "u-mom-app-s-chat.appspot.com",
  messagingSenderId: "513897980518",
  appId: "1:513897980518:web:aab4abc97377f5e68fc3a7",
  measurementId: "G-MGJMDM4H0H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db, auth, app };
