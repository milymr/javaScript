import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const configuracoesFirebase = {
  apiKey: "AIzaSyB2jNawT7uC4qvDf1_wmSh5I03nR1vReGY",
  authDomain: "tds2-2025-aitenticar.firebaseapp.com",
  projectId: "tds2-2025-autenticar",
  storageBucket: "tds2-2025-autenticar.firebasestrorage.app",
  messagingSenderId: "510050860669",
  appId: "1:510050860669:web051224d9ebda2482e23b14",
  measurementid: "G-0VTZLK00P8"
};

const app = initializeApp(configuracoesFirebase);
export const autenticacao = getAuth(app);