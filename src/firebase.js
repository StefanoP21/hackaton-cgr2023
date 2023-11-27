// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXtEzenHgW4a5kAERNADCv47yfRgkbUTc',
  authDomain: 'apuchay-1e76f.firebaseapp.com',
  projectId: 'apuchay-1e76f',
  storageBucket: 'apuchay-1e76f.appspot.com',
  messagingSenderId: '907356668227',
  appId: '1:907356668227:web:a303fbd9afd9f6262e2ff6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
