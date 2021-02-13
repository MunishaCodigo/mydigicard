import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCekNKMX3SnPN3wCUIAwDUl_PMkZQyg17Y",
  authDomain: "loginapi-81add.firebaseapp.com",
  databaseURL: "https://loginapi-81add.firebaseio.com",
  projectId: "loginapi-81add",
  storageBucket: "loginapi-81add.appspot.com",
  messagingSenderId: "861560692887",
  appId: "1:861560692887:web:ce474d8093f709d6ed89d2"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;