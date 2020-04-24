import firebase from "firebase";
import "@firebase/firestore";

let config = {
  apiKey: "AIzaSyAEKc63i7jG2hP52vrlDF3yQgxYjugPfus",
  authDomain: "portfolio-blog-73c8a.firebaseapp.com",
  databaseURL: "https://portfolio-blog-73c8a.firebaseio.com",
  projectId: "portfolio-blog-73c8a",
  storageBucket: "portfolio-blog-73c8a.appspot.com",
  messagingSenderId: "416023080664",
  appId: "1:416023080664:web:bd16153aa226c5cc95f1ad"
};

firebase.initializeApp(config);

export default firebase;
