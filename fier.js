  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
  import {gitFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyCEzZILLndKF8NuUuSyvTYbEI7vfzCKby8",

    authDomain: "sell-pdf-a00ed.firebaseapp.com",

    projectId: "sell-pdf-a00ed",

    storageBucket: "sell-pdf-a00ed.firebasestorage.app",

    messagingSenderId: "901441360756",

    appId: "1:901441360756:web:f7ffb797e4a3791c009221"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

function showMassage(massage,  divId){
	var massageDiv=document.getElementById(divId)
	messageDiv.style.display="block";
	messageDiv.innerHTML=message;
	messageDiv.style.opacity=1;
	setTimeout(function(){
	  messageDiv.style.opacity=0;
     },5000);

}

contst signUp=document.getElementById('submitSigUp');
signUp.addEventListener('click', (event)=> {
  event.preventDefault();
  const email=document.getElementById("emailemail").value;
   const password=document.getElementById("password").value;
   //const firstName=document.getElementById("full name").value;

  const auth=getAuth();
  const db=getFirestore();

  createUserWithEmailAndPassword(auth, emaill, password)
  .then((userCredential)=>{
    const user=userCredential.user;
    const userData={
      email:email,
     // firstName: full name,
    };
    showMassage('Account created succfully', 'signUpMassage');
 	const docRef=doc(db, "user", user.uid);	
	setDoc (docRef, userData)
	.then(()=>{
	  window.location.href='index.html';
 	})
	.catch((error)=> {
		console.error("error writing document", error);
	});
     })
  	.catch((error)=> {
                   const errorCode=error.code;
                     if (errorCode=='auth/email-already-in-use') {

			showMessage('Email Address Already Exists !!!', 'signUpMessage');
			}
			else {
				showMessage('unable to create User', 'signUpMessage');
                        }
		

  })
});
