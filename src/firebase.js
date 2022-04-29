import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDMjjKd47MAQe09naPdv4uBwBeDfyjPHH4',
    authDomain: 'pokedex-57e63.firebaseapp.com',
    projectId: 'pokedex-57e63',
    storageBucket: 'pokedex-57e63.appspot.com',
    messagingSenderId: '192036882065',
    appId: '1:192036882065:web:2a63cc777116dc909d6130',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
