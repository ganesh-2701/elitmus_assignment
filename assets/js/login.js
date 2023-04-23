// const firebaseConfig = {
//     apiKey: "AIzaSyCHWM1pv901bKL4HXgG4HG_zhOvkWXbTJU",
//     authDomain: "demo1-64cf6.firebaseapp.com",
//     projectId: "demo1-64cf6",
//     storageBucket: "demo1-64cf6.appspot.com",
//     messagingSenderId: "924205599193",
//     appId: "1:924205599193:web:29524c2b8ef841abd9b1c8",
//     measurementId: "G-14J1FFNLN0"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

//   const auth=firebase.auth()
//   const database=firebase.database()

//   function register(){
//     email=document.getElementById('email').value 
//     password=document.getElementById('password').value
//     // email=document.getElementById('email').value
//     // email=document.getElementById('email').value
    

//     auth.createUserWithEmailAndPassword(email,password)
//     .then(function(){
//         var user=auth.currentUser

//         var database_ref=database.ref()

//         var user_data={
//             email:email,
//             last_login:Date.now()

//         }

//         database_ref.child('user/'+user.uid).set(user_data)



//         AudioListener('User Created')
//     })
//     .catch(function(error){
//         var error_code=error.code 
//         var error_message=error.message 

//         alert(error_message)
//     }
//     )

//   }

//   function validate_field(field){
//     if(field==null){
//         return false
//     }
//     if (field.length<=0){
//         return false
//     }
//     else{
//         return true
//     }
//   }