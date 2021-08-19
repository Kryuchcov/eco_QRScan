// database/firebaseDb.js

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCdA4J9WJBdfbjvpTJOimVkur_tGJRiiKU",
    authDomain: "ecoticket-usuarios.firebaseapp.com",
    projectId: "ecoticket-usuarios",
    storageBucket: "ecoticket-usuarios.appspot.com",
    messagingSenderId: "224345619672",
    appId: "1:224345619672:web:c2ce73e5822ea56acf6bad"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;