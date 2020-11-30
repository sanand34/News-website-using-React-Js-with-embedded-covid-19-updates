import firebase from "firebase";

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const database = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export { auth };
export { provider };
export { db };
export { database };
