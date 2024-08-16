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

function validarCheckbox() {
    var checkbox = document.getElementById("terminos");
    var mensajeError = document.getElementById("mensajeError");

    if (!checkbox.checked) {
        mensajeError.textContent = "Debes aceptar los términos y condiciones para continuar.";
        return false; // Evitar que se envíe el formulario 
    }

    mensajeError.textContent = ""; // Limpiar el mensaje de error
    return true; // Permiteir que el formulario se envíe
}

function coincidenContrasenias(contrasenia1, contrasenia2){
    return contrasenia1 === contrasenia2
}