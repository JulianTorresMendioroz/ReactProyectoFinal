
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNPnU3a_BVl_xZ4_IKRHuR35t0kASmv74",
  authDomain: "ecomercereactjs.firebaseapp.com",
  projectId: "ecomercereactjs",
  storageBucket: "ecomercereactjs.appspot.com",
  messagingSenderId: "896216217819",
  appId: "1:896216217819:web:f941bf608cee26a27634fe"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}