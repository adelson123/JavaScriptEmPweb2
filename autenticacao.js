function verificarNome() {
    var nome = document.getElementById("nome").value;
    var nomeErro = document.getElementById("nomeErro");
    if (nome == "" || nome.length < 3) {
        nomeErro.innerHTML = "Name must be at least three characters!";
        return false;

    }
    else {
        nomeErro.innerHTML = "";
        return true;
    }
}

function verificarEmail() {
    var email = document.getElementById("email").value;
    var emailErro = document.getElementById("emailErro");
    if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        emailErro.innerHTML = "This e-mail is invalid!!!";
        return false;
    }
    else {
        emailErro.innerHTML = "";
        return true;
    }

}

function verificarPassword() {
    var password = document.getElementById("password").value;
    var passwordErro = document.getElementById("passwordErro")
    if (password == "" || password.length <= 6) {
        passwordErro.innerHTML = "This password is invalid!";
        return false;
    }
    else {
        passwordErro.innerHTML = "";
        return true;
    }
}

function verificarRepetirPassword() {
    var password = document.getElementById("password").value;
    var repPassword = document.getElementById("repPassword").value;
    var repSenhaErro = document.getElementById("repSenhaErro");
    if (repPassword.length < 1 || password != repPassword) {
        repSenhaErro.innerHTML = "This password is different!";
        return false;
    }
    else {
        repSenhaErro.innerHTML = "";
        return true;
    }

}

function verificarPreferencia() {
    var preferencia = document.getElementById("redes");
    var preferencia2 = document.getElementById("programacao");
    var preferencia3 = document.getElementById("manutencao");
    var preferenciaErro = document.getElementById("preferenciaErro");
    if (preferencia.checked || preferencia2.checked || preferencia3.checked) {
        preferenciaErro.innerHTML = "";
        return true;
    }

    else {
        preferenciaErro.innerHTML = "Choose at least one option!"
        return false;
    }

}

function verificarTodosOsCampos() {
    return verificarNome() && verificarEmail() && verificarPassword() &&  verificarRepetirPassword() && 
    verificarPreferencia();
}

function mostrarMensagemEnviada(){
    if(verificarTodosOsCampos()){
        alert("Sent with success!");
    }
}