// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2uHgHPSZOfGP7g96Rra6GPTmydamj6Qk",
  authDomain: "lar-do-pet-d09dd.firebaseapp.com",
  projectId: "lar-do-pet-d09dd",
  storageBucket: "lar-do-pet-d09dd.appspot.com",
  messagingSenderId: "1021077622987",
  appId: "1:1021077622987:web:287234a3dddd2cfa358b4e",
  measurementId: "G-SC1HRR9Q89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };