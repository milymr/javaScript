import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const configuracoesFirebase = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "ID",
  appId: "APP_ID"
};

const app = initializeApp(configuracoesFirebase);
export const autenticacao = getAuth(app);