import firebase from 'firebase/app'
import 'firebase/firestore'

// eslint-disable-next-line no-unused-vars
const app = firebase.initializeApp ({
   apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id"
});
// eslint-disable-next-line no-undef
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
