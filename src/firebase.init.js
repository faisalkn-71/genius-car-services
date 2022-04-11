// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtIs7LMKwn-AJanDCIz560DAeGWrq9i3s",
  authDomain: "genius-car-services-2178f.firebaseapp.com",
  projectId: "genius-car-services-2178f",
  storageBucket: "genius-car-services-2178f.appspot.com",
  messagingSenderId: "542386758372",
  appId: "1:542386758372:web:7dc2df5fe59a51b8a0c2f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;