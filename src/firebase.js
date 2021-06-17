import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDboFOejFUxdytQWE0X9KeSel2d09gX1HI",
    authDomain: "rawdacms.firebaseapp.com",
    projectId: "rawdacms",
    storageBucket: "rawdacms.appspot.com",
    messagingSenderId: "912392581703",
    appId: "1:912392581703:web:34df0b5916253feb443762",
    measurementId: "G-Y3WLLJ75H3"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
