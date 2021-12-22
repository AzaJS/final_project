import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxbx1TDPkiodVmv3TjdLzBRqL81IJJbXM",
  authDomain: "final-project-azret.firebaseapp.com",
  projectId: "final-project-azret",
  storageBucket: "final-project-azret.appspot.com",
  messagingSenderId: "427968035223",
  appId: "1:427968035223:web:e76c5122b7adb0420e2cd2",
};

const fire = firebase.initializeApp(firebaseConfig);

export const aut = getAuth(fire);
export default fire;
