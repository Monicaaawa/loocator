import * as firebase from "firebase";

// TODO: Add SDKs for Firebase rproducts that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQqGEFzqZx3cRwpFrs_zlSfNovqXNQhTE",
  authDomain: "loocator-aa951.firebaseapp.com",
  projectId: "loocator-aa951",
  storageBucket: "loocator-aa951.appspot.com",
  messagingSenderId: "805033013198",
  appId: "1:805033013198:web:14eb9fc14dabc11db0059f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };