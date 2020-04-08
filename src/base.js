import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBUw2coeByoXzeQuaFM3yzAymO4iFnR_RY',
  authDomain: 'catch-of-the-day-market.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-market.firebaseio.com',
})

const base = Rebase.createClass(firebaseApp.database())

// named export
export { firebase }

// default export
export default base
