function valFormulario() {
    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "" || nombre.lenght == 0) {
        alert("No puede dejar vacío el espacio Nombre");
        return false;
    } else {
        alert("USUARIO registrado correctamente");
    }
}

const enviarMensaje = () => alert("ATENCIÓN: Se borrarán todos los campos. ¿Confirma la operación? ")