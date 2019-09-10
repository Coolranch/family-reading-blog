import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhaBVzRpdQ-3N0dFYitfawcfLUIERrKeI",
    authDomain: "family-reading-blog.firebaseapp.com",
    databaseURL: "https://family-reading-blog.firebaseio.com",
    projectId: "family-reading-blog",
    storageBucket: "",
    messagingSenderId: "628705942353",
    appId: "1:628705942353:web:a36abd6375e6aa3643d170"
};

export const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
};