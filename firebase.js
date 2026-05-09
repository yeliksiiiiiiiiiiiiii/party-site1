import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey:
"AIzaSyD-Vm8ckf9MLehWzwPNOHfUZp0M0rFwMJg",

authDomain:
"clamsy-247d0.firebaseapp.com",

projectId:
"clamsy-247d0",

storageBucket:
"clamsy-247d0.firebasestorage.app",

messagingSenderId:
"294782533619",

appId:
"1:294782533619:web:628949b13e6529ab745c86",

measurementId:
"G-C2GR5QW9SG"

};

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

const auth =
getAuth(app);

export {

db,
auth,

collection,
addDoc,
getDocs,
deleteDoc,
doc,
updateDoc,

createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut

};
