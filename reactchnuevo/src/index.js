import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAfxu3P8chukrZPwT0_eI7kzaCDO47-oS8",
  authDomain: "reactecommercezazzali.firebaseapp.com",
  projectId: "reactecommercezazzali",
  storageBucket: "reactecommercezazzali.appspot.com",
  messagingSenderId: "519289380086",
  appId: "1:519289380086:web:ccfb4d5c6b76e93c87e0d7"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
