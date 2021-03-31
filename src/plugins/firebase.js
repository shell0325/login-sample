import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBfXRgAboAk-vxY2FrJHRm9CcRK3ECB5xs",
    authDomain: "throw-money-project.firebaseapp.com",
    databaseURL: "https://throw-money-project-default-rtdb.firebaseio.com",
    projectId: "throw-money-project",
    storageBucket: "throw-money-project.appspot.com",
    messagingSenderId: "611290716532",
    appId: "1:611290716532:web:264df41faf5823771cb421",
    measurementId: "G-BPM5TVTY8D"
};


firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
};

export default firebase;



