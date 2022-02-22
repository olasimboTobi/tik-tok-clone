import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXbxO2OCgsZ4hhwbco10Ujo6j53vqslJ0",
    authDomain: "tik-tok-clone-eb683.firebaseapp.com",
    projectId: "tik-tok-clone-eb683",
    storageBucket: "tik-tok-clone-eb683.appspot.com",
    messagingSenderId: "426588076540",
    appId: "1:426588076540:web:932eec2ec16ec14b4e9a79",
    measurementId: "G-T15HBPVX1Q"
  };

   //connect frontend  to backend
   const firebaseApp = firebase.initializeApp(firebaseConfig);

   // getting access to database
   const db = firebaseApp.firestore();
 
   //basically preparing the authentication module and also a provider and /what you need to do to get google services
  //  const auth = firebaseApp.auth();
   
  //  const provider = new firebase.auth.GoogleAuthProvider();
 
 
  //  export {auth, provider};
   export default db;