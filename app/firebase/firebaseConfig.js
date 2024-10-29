// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeoPEjVtXiE7Sj-pxddi0UtENvlHjTSiA",
    authDomain: "evil-wizards-beta-emails.firebaseapp.com",
    projectId: "evil-wizards-beta-emails",
    storageBucket: "evil-wizards-beta-emails.appspot.com",
    messagingSenderId: "403782143506",
    appId: "1:403782143506:web:9452336b252e31f1a612cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
