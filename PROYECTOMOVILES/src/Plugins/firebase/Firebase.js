import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from 'react-native-dotenv';

const firebaseConfig = {
  apiKey: "AIzaSyBcijyTn7N98WVVdTDN4RWcDHQW14Us9Z4",
      authDomain: "pdmhito3.firebaseapp.com",
      databaseURL: "https://pdmhito3.firebaseio.com",
      projectId: "pdmhito3",
      storageBucket: "pdmhito3.appspot.com",
      messagingSenderId: "937958799377",
      appId: "1:937958799377:web:42c9e1b28aa078688019b0",
      measurementId: "G-NEWK6MJ5L3"

};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage=firebase.storage();

export default firebase;
