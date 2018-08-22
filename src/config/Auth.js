import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDry8wqy0ur8CYT085TdhNNKHKiYFaKSdM",
    authDomain: "crypto-board-5e65a.firebaseapp.com",
    databaseURL: "https://crypto-board-5e65a.firebaseio.com",
    projectId: "crypto-board-5e65a",
    storageBucket: "crypto-board-5e65a.appspot.com",
    messagingSenderId: "1006586041504"
  };
  const authFirebase = firebase.initializeApp(config);

  export default authFirebase;