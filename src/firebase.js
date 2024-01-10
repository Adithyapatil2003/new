import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCRHc9OJ7LDNPn6BfPBqsh3BFSP56yl2bQ",
    authDomain: "llg0-6e768.firebaseapp.com",
    projectId: "llg0-6e768",
    storageBucket: "llg0-6e768.appspot.com",
    messagingSenderId: "471632806453",
    appId: "1:471632806453:web:ef14a77b00d10136c8a77c"
      };
const app=firebase.initializeApp(firebaseConfig )
export const auth=app.auth()
export default app