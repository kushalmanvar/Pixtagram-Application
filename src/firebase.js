// Basic default Reference firebase setup

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    //from Firebase config website
    // apiKey: "AIzaSyDurzVCGhHbeZUn-BCZxy0cLavsfpnRUtI",
    // authDomain: "instagram-clone-react-52896.firebaseapp.com",
    // databaseURL: "https://instagram-clone-react-52896.firebaseio.com",
    // projectId: "instagram-clone-react-52896",
    // storageBucket: "instagram-clone-react-52896.appspot.com",
    // messagingSenderId: "333891082464",
    // appId: "1:333891082464:web:e096ab48006d1f30449885"
    //from Firebase config website
        apiKey: "AIzaSyD8Xb9jWvmmMV3e7EdbBJ9jA9rKc8mJLv8",
        authDomain: "pixtagram-bcb43.firebaseapp.com",
        databaseURL: "https://pixtagram-bcb43.firebaseio.com",
        projectId: "pixtagram-bcb43",
        storageBucket: "pixtagram-bcb43.appspot.com",
        messagingSenderId: "51952159517",
        appId: "1:51952159517:web:7bf56e502847d3d2bd6ff4",
        measurementId: "G-G2357PWXPQ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;