// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpaum5qsidFgg-1dw-n4CvsdnOiowG-U4",
  authDomain: "login-app-42d1c.firebaseapp.com",
  projectId: "login-app-42d1c",
  storageBucket: "login-app-42d1c.appspot.com",
  messagingSenderId: "679714100570",
  appId: "1:679714100570:web:841ff7f1a27ccfb5154f63"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth()

export {auth};