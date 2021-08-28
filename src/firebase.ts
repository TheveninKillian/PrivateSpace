// eslint-disable-next-line import/order
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCEYE4IHyv3uzBcsENRb1AF4sGzvOTpnsY',
  authDomain: 'private-app-8b81b.firebaseapp.com',
  projectId: 'private-app-8b81b',
  storageBucket: 'private-app-8b81b.appspot.com',
  messagingSenderId: '3379835104',
  appId: '1:3379835104:web:5fd4962f74f77bc446a085',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }
