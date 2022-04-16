import firebase from 'firebase/compat';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtaF723Wbnpv-epUgYC60WIDBrM8kfIH4",
  authDomain: "book-trading-e52fd.firebaseapp.com",
  projectId: "book-trading-e52fd",
  storageBucket: "book-trading-e52fd.appspot.com",
  messagingSenderId: "113455609060",
  appId: "1:113455609060:web:c695b87e911720fc12a8f1"
};



if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


export { firebase };