// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7WGfUn1rpZQqhKvAO39biLQhze1rpAHo",
    authDomain: "evilwizardd-efbda.firebaseapp.com",
    projectId: "evilwizardd-efbda",
    storageBucket: "evilwizardd-efbda.appspot.com",
    messagingSenderId: "477795449052",
    appId: "1:477795449052:web:f02e9ecb73f9e7ade61c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
