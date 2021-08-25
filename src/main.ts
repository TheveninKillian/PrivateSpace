import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './scss/style.scss'
// eslint-disable-next-line import/order
import firebase from 'firebase/app'

const routes = setupLayouts(generatedRoutes)

const firebaseConfig = {
  apiKey: 'AIzaSyCEYE4IHyv3uzBcsENRb1AF4sGzvOTpnsY',
  authDomain: 'private-app-8b81b.firebaseapp.com',
  projectId: 'private-app-8b81b',
  storageBucket: 'private-app-8b81b.appspot.com',
  messagingSenderId: '3379835104',
  appId: '1:3379835104:web:5fd4962f74f77bc446a085',
}

firebase.initializeApp(firebaseConfig)

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
})
