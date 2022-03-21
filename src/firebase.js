// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy0G-QRL3_P6PKMysZeF5N9sRc-ABsXEM",
    authDomain: "giphy-sentiment-777cb.firebaseapp.com",
    databaseURL: "https://giphy-sentiment-777cb-default-rtdb.firebaseio.com",
    projectId: "giphy-sentiment-777cb",
    storageBucket: "giphy-sentiment-777cb.appspot.com",
    messagingSenderId: "557818033344",
    appId: "1:557818033344:web:83132f97234b8fdbc8a925"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;