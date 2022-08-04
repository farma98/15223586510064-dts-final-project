import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDBhOsf_n6kUvsYb0diJpRMWCbjdbPAeSA",
  authDomain: "react-web-sportmonks-064.firebaseapp.com",
  databaseURL:
    "https://react-web-sportmonks-064-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-web-sportmonks-064",
  storageBucket: "react-web-sportmonks-064.appspot.com",
  messagingSenderId: "1091269257389",
  appId: "1:1091269257389:web:5676961ef9bb9fc3f03e24",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Regis Error with code : ", error.code);
    console.error("Regis Error message : ", error.message);
    return {
      status: false,
      error: error,
    };
  }
};

const registerWithEmailPassword = async (email, password) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);

    return {
      status: true,
      user: newUser,
    };
  } catch (error) {
    console.error("Regis Error with code : ", error.code);
    console.error("Regis Error message : ", error.message);
    return {
      status: false,
      error: error,
    };
  }
};

const loginWithEmailPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return {
      status: true,
      user: user,
    };
  } catch (error) {
    console.error("Login Error with code : ", error.code);
    console.error("Login Error message : ", error.message);
    return {
      status: false,
      error: error,
    };
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error("Reset Password Error with code : ", error.code);
    console.error("Reset Password Error message : ", error.message);
  }
};

const signOutFromApp = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error with code : ", error.code);
    console.error("Logout Error message : ", error.message);
  }
};

export {
  auth,
  database,
  loginWithGoogle,
  registerWithEmailPassword,
  loginWithEmailPassword,
  resetPassword,
  signOutFromApp,
};
