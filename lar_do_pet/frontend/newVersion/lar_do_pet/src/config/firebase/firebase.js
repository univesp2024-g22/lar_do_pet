import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD2uHgHPSZOfGP7g96Rra6GPTmydamj6Qk',
  authDomain: 'lar-do-pet-d09dd.firebaseapp.com',
  projectId: 'lar-do-pet-d09dd',
  storageBucket: 'lar-do-pet-d09dd.appspot.com',
  messagingSenderId: '1021077622987',
  appId: '1:1021077622987:web:287234a3dddd2cfa358b4e',
  measurementId: 'G-SC1HRR9Q89',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


// export { auth, db };
