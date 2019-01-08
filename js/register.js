// JavaScript source code
(function () {

    var config = {
        apiKey: "AIzaSyAS8vN7-LDkDhKeDcCwY9QjlSfNomikd90",
        authDomain: "sipcweb-412cb.firebaseapp.com",
        databaseURL: "https://sipcweb-412cb.firebaseio.com",
        projectId: "sipcweb-412cb",
        storageBucket: "sipcweb-412cb.appspot.com",
        messagingSenderId: "828179745364"
    };
    firebase.initializeApp(config);

    var txtemail = document.getElementById('txtEmail');
    var txtemailconf = document.getElementById('txtEmailConf');
    var txtpassword = document.getElementById('txtPasswd');
    var btnLogin = document.getElementById('btnLogin');
    var btnSingUp = document.getElementById('btnSingUp');
    var btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {

        const email = txtemail.value;
        const pass = txtpassword.value;
        const auth = firebase.auth();

        //alert("Email" + email + "Pass" + pass);

        if (validateEmail(email)) {

            console.log('singin');
            const promise = auth.signInWithEmailAndPassword(email, pass);

            promise.catch(e => console.log(e.message));
        }
    });

    btnSingUp.addEventListener('click', e => {
        const email = txtemail.value;
        const pass = txtpassword.value;
        const auth = firebase.auth();
        //alert("Email" + email + "Pass" + pass);
        if (validateEmail(email)) {
            console.log('createuser');
            const promise = auth.createUserWithEmailAndPassword(email, pass);

            promise.catch(e => console.log(e.message));
            
        }
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser)
            alert("Bienvenido: " + firebaseUser.email)
            btnLogout.style.visibility = "visible"
            btnLogin.style.visibility = "hidden"
            btnSingUp.style.visibility = "hidden"
        }
        else {
            console.log('Not logged in');
            btnLogout.style.visibility = "hidden"
            btnLogin.style.visibility = "visible"
            btnSingUp.style.visibility = "visible"
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}());



/* function register(F) {
    var first_name = F.firstname.value;
    var second_name = F.firstlastname.value;
    var last_name = F.secondlastname.value;
    var password = F.password.value;
    var email = F.email.value;
    var email_conf = F.email_conf.value;

    if (!validateEmail(email)) {
        alert("Email no válido");
        return 0;
    }
    else if (email === "") {
        alert("Email vacío");
        return 0;
    }
    else if (email != email_conf) {
        alert("Confirmación de email no valida");
        return 0;
    }
    else if (password === "") {
        alert("Contraseña no válida");
        return 0;
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            // ...
        });
        alert("Usuario creado");
    }
}*/

