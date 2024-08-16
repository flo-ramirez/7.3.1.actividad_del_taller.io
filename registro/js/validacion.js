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
