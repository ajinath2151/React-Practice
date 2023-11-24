// import firebase from 'firebase';

import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config={
    apiKey: "AIzaSyBfKIVPyHNpZfQkWRJdAK8ot3OR-m6rlYc",
    authDomain: "fir-email-636ae.firebaseapp.com",
    projectId: "fir-email-636ae",
    storageBucket: "fir-email-636ae.appspot.com",
    messagingSenderId: "643275482110",
    appId: "1:643275482110:web:0e89b55adc9ac7663a16af"
}
firebase.initializeApp(config);

export default firebase;