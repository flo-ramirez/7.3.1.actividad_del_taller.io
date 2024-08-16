document.getElementById('regBtn').addEventListener('click', function() {
    const password1 = document.getElementById('password1').value;
    const passwordHelp = document.getElementById('passwordHelp');

    if (password1.length < 6) {
        passwordHelp.textContent = "La contraseña debe tener al menos 6 caracteres.";
        showAlertError();
    } else {
        passwordHelp.textContent = "";
        showAlertSuccess();
    }
});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function coincidenContrasenias(contrasenia1, contrasenia2){
    return contrasenia1 === contrasenia2
}