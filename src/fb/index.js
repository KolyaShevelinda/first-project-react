// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXFq83DD-LJbu3T02sKeOJvJ9-HYshlTM",
    authDomain: "todo-base-627f7.firebaseapp.com",
    databaseURL: "https://todo-base-627f7-default-rtdb.firebaseio.com",
    projectId: "todo-base-627f7",
    storageBucket: "todo-base-627f7.appspot.com",
    messagingSenderId: "982657010737",
    appId: "1:982657010737:web:cfcdeb878c7ec494989910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {app};