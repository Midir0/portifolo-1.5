function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        document.getElementById("mensagem").innerHTML = "Login realizado com sucesso!";
    } else {
        document.getElementById("mensagem").innerHTML = "Por favor, informe usuário e senha.";
    }
}

if (localStorage.getItem("username") && localStorage.getItem("password")) {
    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");
    document.getElementById("mensagem").innerHTML = "Usuário " + username + " já está logado.";
}