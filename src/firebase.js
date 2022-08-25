//import firebase from 'firebase'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAXdZIqM8p7fgm7LIgdzxFxlo61-HC2Krk',
  authDomain: 'clone-d3d96.firebaseapp.com',
  projectId: 'clone-d3d96',
  storageBucket: 'clone-d3d96.appspot.com',
  messagingSenderId: '3990131575',
  appId: '1:3990131575:web:4a33e28549157997858772',
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }
