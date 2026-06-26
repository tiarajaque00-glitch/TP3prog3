const personas = [];

const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tablaPersonas");

formulario.addEventListener("submit", agregarPersona);

function agregarPersona(evento){

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();

    const edad = Number(document.getElementById("edad").value);
    const altura = Number(document.getElementById("altura").value);
    const peso = Number(document.getElementById("peso").value);

    if(
        nombre === "" ||
        apellido === "" ||
        edad <= 0 ||
        altura <= 0 ||
        peso <= 0
    ){
        alert("Complete correctamente todos los datos.");
        return;
    }

    personas.push({

        nombre,
        apellido,
        edad,
        altura,
        peso

    });

    formulario.reset();

    actualizarTabla();

}