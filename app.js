function valFormulario() {
    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        alert("No puede dejar vacío el espacio Nombre");
        return false;
    } else {
        alert("Nombre registrado correctamente");
    }
}

