// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChNb0DmVEV8q-tv3b904Pn3F0tMdGcfUg",
  authDomain: "tech-brand.firebaseapp.com",
  projectId: "tech-brand",
  storageBucket: "tech-brand.appspot.com",
  messagingSenderId: "684869898808",
  appId: "1:684869898808:web:e44e818ef7c9f71aed8ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;