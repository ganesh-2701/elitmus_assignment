 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCHWM1pv901bKL4HXgG4HG_zhOvkWXbTJU",
 authDomain: "demo1-64cf6.firebaseapp.com",
 projectId: "demo1-64cf6",
 storageBucket: "demo1-64cf6.appspot.com",
messagingSenderId: "924205599193",
appId: "1:924205599193:web:29524c2b8ef841abd9b1c8",
measurementId: "G-14J1FFNLN0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 console.log(app);



 const auth = getAuth();

//  let register = document.getElementById("register")
//  let login = document.getElementById("login")

 
//  register.addEventListener("click",function(e){
//      e.preventDefault()
//      var email = document.getElementById("email").value;
//      var pass = document.getElementById("pass").value;
//      createUserWithEmailAndPassword(auth,email,pass)
//  .then((UserCredential)=>{
//      const user = UserCredential.user;
//      console.log(user)
//      alert("Registration Successful");
//  })
//  .catch((error)=>{
//      alert("Try Again You are either registered or there might be an issue with your network");
//  })
//  })

//  login.addEventListener("click",function(e){
//      e.preventDefault()
//      var email = document.getElementById("loginemail").value;
//      var pass = document.getElementById("loginpass").value;
//      signInWithEmailAndPassword(auth,email,pass)
//      .then((UserCredential)=>{
//          const user = UserCredential.user;
//          console.log(user)
//          alert(user.email+" Login Success!!!")
//          // document.getElementById("btn").innerHTML = "Logout";
//          window.location.replace("./index.html")

//      }).catch((error)=>{
//          alert("username or password is incorrect");
//      })

//  })



let btn = document.getElementById("btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    signOut(auth).then(()=>{
        alert("signout success");
        btn.style.display = 'none';
        window.location.replace("./login.html")
    }).catch((error)=>{
        alert("Logout unsucessful try agian")
    })
}) 
 