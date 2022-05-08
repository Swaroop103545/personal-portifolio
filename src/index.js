import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import '../node_modules/normalize.css'
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGB8ElKtcTWh6XM2cxock00kBo1UmAbgE",
  authDomain: "personal-portifolio-8dfcd.firebaseapp.com",
  projectId: "personal-portifolio-8dfcd",
  storageBucket: "personal-portifolio-8dfcd.appspot.com",
  messagingSenderId: "584434884998",
  appId: "1:584434884998:web:2f35bbb3f7760fa812cc07",
  measurementId: "G-47MDTPSW61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
  <App />
  </BrowserRouter>

   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
