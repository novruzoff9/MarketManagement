// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK_2Js9kk_nevJCA7HhUUlTpdQLaJPuwQ",
  authDomain: "tohidmustfayevdb.firebaseapp.com",
  projectId: "tohidmustfayevdb",
  storageBucket: "tohidmustfayevdb.firebasestorage.app",
  messagingSenderId: "350919569675",
  appId: "1:350919569675:web:393a0ea2daed86f6dd320e",
  measurementId: "G-XGZ4PVXBY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
