// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtaF723Wbnpv-epUgYC60WIDBrM8kfIH4",
  authDomain: "book-trading-e52fd.firebaseapp.com",
  projectId: "book-trading-e52fd",
  storageBucket: "book-trading-e52fd.appspot.com",
  messagingSenderId: "113455609060",
  appId: "1:113455609060:web:c695b87e911720fc12a8f1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };