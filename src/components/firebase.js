// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/storage';
// import 'firebase/firestore';

// try {
//   firebase.initializeApp({
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//   });
// } catch (error) {
//   if (!/already exists/u.test(error.message)) {
//     console.log('firebase admin initialization error', error.stack);
//   }
// }

// export const fb = {
//   auth: firebase.auth(),
//   storage: firebase.storage(),
//   firestore: firebase.firestore(),
// };

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyC6QE3HkfbhHnMQ5r9MVf_ZyAFSG7VEhkM',
  authDomain: 'racoon-6aded.firebaseapp.com',
  projectId: 'racoon-6aded',
  storageBucket: 'racoon-6aded.appspot.com',
  messagingSenderId: '563767548087',
  appId: '1:563767548087:web:34624bcf4d3699f5f75532',
});

export default app;
