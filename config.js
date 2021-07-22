import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1GnfTWtjq_qQo1DK5yUo5fyzjqpaLE1o",
  authDomain: "electricity-app-45b12.firebaseapp.com",
  projectId: "electricity-app-45b12",
  storageBucket: "electricity-app-45b12.appspot.com",
  messagingSenderId: "501227085607",
  appId: "1:501227085607:web:54d1a756a26c58b135d302",
  measurementId: "G-HEXP37PHNP"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();