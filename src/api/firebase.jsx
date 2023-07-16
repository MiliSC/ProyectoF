// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2KYu3LJn1xGwZp_DKGRyGQZ4DxRxKCvk",
  authDomain: "proyectofinal-a0c82.firebaseapp.com",
  projectId: "proyectofinal-a0c82",
  storageBucket: "proyectofinal-a0c82.appspot.com",
  messagingSenderId: "275363731316",
  appId: "1:275363731316:web:67d2bf29e05e8cd2f97e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);