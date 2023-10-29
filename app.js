function valFormulario() {
    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "" || nombre.lenght == 0) {
        alert("No puede dejar vacío el espacio Nombre");
        return false;
    } else {
        alert("USUARIO registrado correctamente");
    }
}

const enviarMensaje = () => alert("ATENCIÓN: Esta acción borrará todos los cambos. ¿Confirma?")

const CargarProductos = async () => {
    try {
        const respuesta = await fetch("https://fakestoreapi.com/products");
        if (respuesta.ok) {
            const data = await respuesta.json();
            return data;
        } else {
            throw new Error('Error al obtener los productos');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

CargarProductos()
    .then(data => {
        if (data) {
            console.log(data);
        } else {
            console.log('No se pudieron cargar los productos.');
        }
    })
    .catch(error => {
        console.error('Ocurrió un error:', error);
    });
