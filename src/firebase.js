import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBX344tVDV42j55ncOvzSgXryQVxZzxUrg",
  authDomain: "dashboard-708e5.firebaseapp.com",
  projectId: "dashboard-708e5",
  storageBucket: "dashboard-708e5.appspot.com",
  messagingSenderId: "395020577558",
  appId: "1:395020577558:web:d28373a5a0488507cdbe37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);
export const auth = getAuth()