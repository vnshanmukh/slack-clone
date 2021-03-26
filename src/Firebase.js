import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDyK_Bug2ot75IvqSely5--GtjaI-w3eaY",
  authDomain: "slack-clone-a.firebaseapp.com",
  projectId: "slack-clone-a",
  storageBucket: "slack-clone-a.appspot.com",
  messagingSenderId: "109443583312",
  appId: "1:109443583312:web:02043e2e8b5af6fae97055",
  measurementId: "G-3C8HEYYTJ8",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
