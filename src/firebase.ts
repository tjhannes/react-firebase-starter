import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.firebase_key,
  authDomain: "redi-demo-38743.firebaseapp.com",
  projectId: "redi-demo-38743",
  storageBucket: "redi-demo-38743.appspot.com",
  messagingSenderId: "13192301857",
  appId: import.meta.env.app_id,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
