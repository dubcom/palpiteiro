
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

// export default config
// const database = firebase.database()
// const auth = app.auth()
// // export default app 
// export { firebase, auth, database };

// Initialize Firebase
const app = initializeApp(firebaseConfig);