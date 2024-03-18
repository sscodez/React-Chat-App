import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu1mGzR8P8d3wEgp-36FdWFU6bZh2sG2Q",
  authDomain: "safe-effective.firebaseapp.com",
  projectId: "safe-effective",
  storageBucket: "safe-effective.appspot.com",
  messagingSenderId: "802747830100",
  appId: "1:802747830100:web:0a092a44d6437f7d8e02c1",
  measurementId: "G-YGRV3DZFDF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
