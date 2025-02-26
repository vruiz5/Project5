import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxsGbuxCm5M4kh0cGzKjZFn-r5fABGl-g",
  authDomain: "game-directory-439bc.firebaseapp.com",
  projectId: "game-directory-439bc",
  storageBucket: "game-directory-439bc.firebasestorage.app",
  messagingSenderId: "799572148951",
  appId: "1:799572148951:web:659eaf5ff9d50dd0c82692"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);