// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQJH3m98M9uHt3oJt-DC5-Cy7RTn3ZBsA",
    authDomain: "react-crash-dbdc9.firebaseapp.com",
    projectId: "react-crash-dbdc9",
    storageBucket: "react-crash-dbdc9.firebasestorage.app",
    messagingSenderId: "213356654602",
    appId: "1:213356654602:web:4f884b67bd537b68daeff3",
    measurementId: "G-RM36CQ5HZ5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


