// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDTNe7OZ6AhGgPxIiQKrDNMH-yTS7pGX8",
  authDomain: "soberbiabuyers.firebaseapp.com",
  projectId: "soberbiabuyers",
  storageBucket: "soberbiabuyers.appspot.com",
  messagingSenderId: "163268419005",
  appId: "1:163268419005:web:5e5fc3cc9e6a1a113986d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;
