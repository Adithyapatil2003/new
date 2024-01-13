import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCRHc9OJ7LDNPn6BfPBqsh3BFSP56yl2bQ",
    authDomain: "llg0-6e768.firebaseapp.com",
    projectId: "llg0-6e768",
    storageBucket: "gs://llg0-6e768.appspot.com",
    messagingSenderId: "471632806453",
    appId: "1:471632806453:web:ef14a77b00d10136c8a77c"
};

const app=firebase.initializeApp(firebaseConfig);
export const auth=app.auth();
export const db=firebase.firestore(app);
const storage = getStorage(app);

export const uploadImage = async (file) => {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

export const WriteUsers = (lawyers, data) => addDoc(collection(db, lawyers), data);
export default app;
