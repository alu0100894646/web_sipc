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
    //Extraemos los elementos del formulario
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
        else {
            alert("Email no válido");
        }
    });

    btnSingUp.addEventListener('click', e => {
        const email = txtemail.value;
        const pass = txtpassword.value;
        const auth = firebase.auth();
        //alert("Email" + email + "Pass" + pass);
        if (email != txtemailconf.value) {
            alert("Los Emails no son iguales")
        }
        else if (validateEmail(email)) {
            console.log('createuser');
            const promise = auth.createUserWithEmailAndPassword(email, pass);

            promise.catch(e => console.log(e.message));

        }
        else {
            alert("Email no válido");
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

