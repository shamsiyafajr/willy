//import firebase from 'firebase'
//require('@firebase/firestore')
//import * as firebase from 'firebase';
import { firebase } from '@firebase/app';
import '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCgXBXdTJKdzq9xZnIAsyARpTOTy7Nevc4",
  authDomain: "willy-287c0.firebaseapp.com",
  projectId: "willy-287c0",
  storageBucket: "willy-287c0.appspot.com",
  messagingSenderId: "784965020880",
  appId: "1:784965020880:web:0f403eed1adf31aac642d5"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  {
  firebase.initializeApp(firebaseConfig)
  }
  
  export default firebase.firestore();
   // firebase.initializeApp(firebaseConfig);

 // export default firebase.firestore();
