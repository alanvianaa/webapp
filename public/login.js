var firebaseConfig = {
    apiKey: "AIzaSyDgwGk9MWvHGSzYTEQmjv1m8HVromHF07E",
    authDomain: "fazenda-api.firebaseapp.com",
    databaseURL: "https://fazenda-api.firebaseio.com",
    projectId: "fazenda-api",
    storageBucket: "fazenda-api.appspot.com",
    messagingSenderId: "359112140889",
    appId: "1:359112140889:web:efccea9e63a334017c6948",
    measurementId: "G-WGR1H2NPZJ"
  };

var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'https://alanviana.com'
  };
  firebase.initializeApp(firebaseConfig);
 

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
        }
        document.getElementById("user_para").innerHTML = "Nome: "+name+" email: "+email+" uid:"+uid;

    } else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

firebase.analytics();

function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Erro no usuario/senha: "+userEmail+ " "+ userPass);
      });
}

function logout(){
    firebase.auth().signOut();
}


