// import * as firebase from 'firebase/app';

// import "firebase/database";  // make sure to import this

// const firebaseConfig = {
//   apiKey: "AIzaSyDp4EsovF4CY56qd8u8iFLJZ4_CAzBjoi0",
//   authDomain: "cranes-37cde.firebaseapp.com",
//   projectId: "cranes-37cde",
//   storageBucket: "cranes-37cde.appspot.com",
//   messagingSenderId: "988854100377",
//   appId: "1:988854100377:web:601d8556aba28eb091b308",
//   measurementId: "G-JYVG55Q9QK"
// };

// firebase.initializeApp(firebaseConfig);

// export const database = firebase.database();

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// import { getAuth } from 'firebase/compat/auth'


// import "firebase/compat/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAS8o1T2LCNw0KMQM3MeAVzbVkX1pAtoA0",
  authDomain: "secret-santa-faa74.firebaseapp.com",
  projectId: "secret-santa-faa74",
  storageBucket: "secret-santa-faa74.appspot.com",
  messagingSenderId: "947869456764",
  appId: "1:947869456764:web:d9f1912d0452acce39ecf9",
  measurementId: "G-LKGQHHF7WE"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

