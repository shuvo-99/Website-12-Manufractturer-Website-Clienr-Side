// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnIH5uyb3-ux4R07xnWGbSUxoGKAhUy8U",
  authDomain: "tool-manufracturer.firebaseapp.com",
  projectId: "tool-manufracturer",
  storageBucket: "tool-manufracturer.appspot.com",
  messagingSenderId: "391747863110",
  appId: "1:391747863110:web:ec41ad1bdfe1e173914047",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
