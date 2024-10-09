// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNjLZROszc00g14xQmOxteB3Wa2gxyFFc",
  authDomain: "personal-page-18cfc.firebaseapp.com",
  projectId: "personal-page-18cfc",
  storageBucket: "personal-page-18cfc.appspot.com",
  messagingSenderId: "763081143422",
  appId: "1:763081143422:web:b673af0b0c084f5109142f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };