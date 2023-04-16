import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2st_pHsMipR19P9N4ckzZj4X5cxhAFk4",
  authDomain: "bitirme-projem-b0af0.firebaseapp.com",
  projectId: "bitirme-projem-b0af0",
  storageBucket: "bitirme-projem-b0af0.appspot.com",
  messagingSenderId: "1003766217648",
  appId: "1:1003766217648:web:6c6640014d5c3f838db475",
  measurementId: "G-2G0VDP7PVW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);