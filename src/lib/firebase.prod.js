import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9kIxIu0IfjaiNDcZukUMLAyhdJZhncIM",
    authDomain: "netflix-989e0.firebaseapp.com",
    databaseURL: "https://netflix-989e0.firebaseio.com",
    projectId: "netflix-989e0",
    storageBucket: "netflix-989e0.appspot.com",
    messagingSenderId: "948917134704",
    appId: "1:948917134704:web:b7a2ce9cd0dc74c5041bb5"
}

const firebase = Firebase.initializeApp(config);

export { firebase };