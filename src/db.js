import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC61yX2UxT3FE0mnAmbZrl-Rqk1utq2cbE",
  authDomain: "vue-apis-cd5b8.firebaseapp.com",
  projectId: "vue-apis-cd5b8",
  storageBucket: "vue-apis-cd5b8.appspot.com",
  messagingSenderId: "594948093034",
  appId: "1:594948093034:web:2bf83b12e61b1e0f41c613",
  measurementId: "G-7GYYML0K7C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
