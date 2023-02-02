import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'
import firebaseConfig  from './config'

Firebase.initializeApp(firebaseConfig)

export const auth = Firebase.auth()
export const firestore = Firebase.firestore()
export const firebase = Firebase

const databaseRef = firebase.database().ref()
export const roomsRef = databaseRef.child('Rooms')
export const accountsRef = databaseRef.child('Accounts')
