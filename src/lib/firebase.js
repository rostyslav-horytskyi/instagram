import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDJoXO5dUS7LFk_nrBE664Am0CPqX9UnNs',
  authDomain: 'instagram-yt-7ac8e.firebaseapp.com',
  projectId: 'instagram-yt-7ac8e',
  storageBucket: 'instagram-yt-7ac8e.appspot.com',
  messagingSenderId: '1076767722132',
  appId: '1:1076767722132:web:7bc0fae84d256a88e18281'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
