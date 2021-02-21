import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBcDZCDkHuiGC2sBVpDvIFN6Fb0qcV0EQ",
  authDomain: "musafirrana-travels.firebaseapp.com",
  projectId: "musafirrana-travels",
  storageBucket: "musafirrana-travels.appspot.com",
  messagingSenderId: "676153383223",
  appId: "1:676153383223:web:5a49eec22775f0466c22b2",
  measurementId: "G-2275YLMGX0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
