// JavaScript source code
function register(F) {
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
    if (email === "") {
        alert("Email vacío");
        return 0;
    }
    else if (email === email_conf) {
        alert("Confirmación de email no valida");
        return 0;
    }
    else if (password === "") {
        alert("Contraseña no válida");
        return 0;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}