import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkbPM7qDJ6QJgHCsaTBHqfrJpeyYVn-F0",
  authDomain: "linkedin-clone-c7c7c.firebaseapp.com",
  projectId: "linkedin-clone-c7c7c",
  storageBucket: "linkedin-clone-c7c7c.appspot.com",
  messagingSenderId: "800405967237",
  appId: "1:800405967237:web:87e6f088c591c1b74634ec",
  measurementId: "G-EXT8TNYZZF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage };
export default db;