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
function actualizarTabla(){

    tabla.innerHTML = "";

    personas.forEach((persona, indice)=>{

        const fila = document.createElement("tr");

        const imc = (
            persona.peso /
            (persona.altura * persona.altura)
        ).toFixed(2);

        fila.innerHTML = `

        <td>${persona.nombre}</td>

        <td>${persona.apellido}</td>

        <td>${persona.edad}</td>

        <td>${persona.altura}</td>

        <td>${persona.peso}</td>

        <td>${imc}</td>

        <td>

            <button class="eliminar">

                Eliminar

            </button>

        </td>

        `;

        fila.querySelector(".eliminar")
        .addEventListener("click",()=>{

            eliminarPersona(indice);

        });

        tabla.appendChild(fila);

    });

}
function eliminarPersona(indice){

    personas.splice(indice,1);

    actualizarTabla();

}