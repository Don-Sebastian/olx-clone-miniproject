import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhYiPKMjfao52wZ_SicIdcx_iQ-Nv0Jso",
  authDomain: "fir-302d6.firebaseapp.com",
  projectId: "fir-302d6",
  storageBucket: "fir-302d6.appspot.com",
  messagingSenderId: "437339251631",
  appId: "1:437339251631:web:7afa7d8d67f442c7ba055a",
  measurementId: "G-2JW1F3Q3DX"
};

export default firebase.initializeApp(firebaseConfig)