// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getStorage } = require('firebase/storage');
const { getDatabase } = require('firebase/database');
// import * as dotenv from 'dotenv';
// dotenv.config()

const firebaseConfig = {
  apiKey: "AIzaSyBUh8nSDGnRWPqeiMentCtJU1l_f5ckPWo",
  authDomain: "binar-fsw-29.firebaseapp.com",
  databaseURL: "https://binar-fsw-29-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "binar-fsw-29",
  storageBucket: "binar-fsw-29.appspot.com",
  messagingSenderId: "869942278872",
  appId: "1:869942278872:web:33273fba01a1a024dcf5ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth and Storage instances
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

module.exports = {
  auth, storage, database
};

module.exports.default = initializeApp(firebaseConfig);