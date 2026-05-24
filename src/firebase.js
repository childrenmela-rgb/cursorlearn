import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOfa7sRW23tyTjuiQoHIwsm_DjJO-kcoU",
  authDomain: "cursorlearn-40707.firebaseapp.com",
  projectId: "cursorlearn-40707",
  storageBucket: "cursorlearn-40707.firebasestorage.app",
  messagingSenderId: "1086754287910",
  appId: "1:1086754287910:web:5fad77af70e1f395e511e7"
};

const app = initializeApp(firebaseConfig);

export default app;