import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEXf5BkRBZTJCIKBHZEp0XuMJgwWakYU4",
    authDomain: "todo-database-78ccd.firebaseapp.com",
    projectId: "todo-database-78ccd",
    storageBucket: "todo-database-78ccd.appspot.com",
    messagingSenderId: "616153248531",
    appId: "1:616153248531:web:3610bb8e34449f691ce0e6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }


