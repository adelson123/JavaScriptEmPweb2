function verificarNome(){
    var nome = document.getElementById("nome").value;
    var nomeErro = document.getElementById("nomeErro");
    if(nome == "" || nome.length<3){
        nomeErro.innerHTML="name necessity minimin three character!";
    }
    else{
        nomeErro.innerHTML="";
    }
}

function verificarEmail(){
    var email = document.getElementById("email").value;
    var emailErro = document.getElementById("emailErro");
  if(email == "" || email.indexOf('@')==-1||email.indexOf('.')==-1){
      emailErro.innerHTML="This e-mail is invalid!!!";
  }
  else{
      emailErro.innerHTML="";
  }

}

function verificarPassword(){
    var password = document.getElementById("password").value;
    var passwordErro = document.getElementById("passwordErro")
    if(password == "" || password.length<=6){
        passwordErro.innerHTML="This password is invalid!";
    }
    else{
        passwordErro.innerHTML="";
    }
}

function verificarRepetirPassword(){
    var password = document.getElementById("password").value;
    var repPassword = document.getElementById("repPassword").value;
    var repSenhaErro = document.getElementById("repSenhaErro");
    if(password != repSenhaErro){
        repSenhaErro.innerHTML="This password is diferent!";
    }
    else{
        alert("chegou aqui")
        repSenhaErro.innerHTML="";
    }
}

