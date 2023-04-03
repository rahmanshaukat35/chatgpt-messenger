import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyANOF7HCe7TVTNhR9sxmciwO9NgaJfb4_w',
	authDomain: 'chat-gpt-messenger-fbecd.firebaseapp.com',
	projectId: 'chat-gpt-messenger-fbecd',
	storageBucket: 'chat-gpt-messenger-fbecd.appspot.com',
	messagingSenderId: '993310007057',
	appId: '1:993310007057:web:fb7f8f2d05030209cbf6b0',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
