import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,  } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCgB468kPz2Ax4I1BamFRVQ_zBgEHr80Yc",
  authDomain: "disney-clone-aae92.firebaseapp.com",
  projectId: "disney-clone-aae92",
  storageBucket: "disney-clone-aae92.appspot.com",
  messagingSenderId: "476748782184",
  appId: "1:476748782184:web:421a8317a47b48992af9dd",
  measurementId: "G-XBMT6WMM0G"
};

const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
