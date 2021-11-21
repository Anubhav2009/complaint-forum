import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBIDJbxhNlXvdnRTRIT4SW_H1yEimUQ92E",
  authDomain: "complaint-forumnotlike.firebaseapp.com",
  projectId: "complaint-forumnotlike",
  storageBucket: "complaint-forumnotlike.appspot.com",
  messagingSenderId: "1076614268841",
  appId: "1:1076614268841:web:2d2813cd1ec685451166b8"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

