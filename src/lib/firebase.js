
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcAQTcB9elwh9pRdEPfecSh_8vQwEdsJU",
  authDomain: "portfolio-app-32b9d.firebaseapp.com",
  projectId: "portfolio-app-32b9d",
  storageBucket: "portfolio-app-32b9d.appspot.com",
  messagingSenderId: "1065759264079",
  appId: "1:1065759264079:web:00d24e4d7847c8126c893a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const basedatos = getFirestore(app)

export { basedatos };