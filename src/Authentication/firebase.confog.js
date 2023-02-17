import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdjrIiTpVyOItSkNM_lWI8pdocNQIKnoU",
  authDomain: "pase-aci.firebaseapp.com",
  projectId: "pase-aci",
  storageBucket: "pase-aci.appspot.com",
  messagingSenderId: "559261216064",
  appId: "1:559261216064:web:bec204d27998ffe7311ea5"
};


const app = initializeApp(firebaseConfig);

export default app;