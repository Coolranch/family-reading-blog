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

firebase.initializeApp(firebaseConfig);

export const getErrorByCode = (errorCode) => {
    switch (errorCode.toString()) {
        case '400':
        case 'auth/email-already-in-use':
            return 'Email is already being used, please register with a different email.';

        case 'auth/invalid-email':
            return 'Email address is invalid.';

        case 'auth/weak-password':
            return 'Password is too weak, please create a stronger one.';

        case 'auth/user-disabled':
            return 'User is currently disabled.';

        case 'auth/user-not-found':
            return 'User not found, please register using your email.';

        case 'auth/wrong-password':
            return 'Incorrect password, please try again.';

        default:
            return 'Unknown error!';
    }
};

export default firebase;