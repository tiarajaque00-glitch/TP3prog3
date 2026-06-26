const tecnologias = [

    {
        nombre: "HTML",
        descripcion: "Estructura de una página web."
    },

    {
        nombre: "CSS",
        descripcion: "Permite diseñar y dar estilo."
    },

    {
        nombre: "JavaScript",
        descripcion: "Agrega comportamiento dinámico."
    },

    {
        nombre: "Flexbox",
        descripcion: "Sistema moderno para distribuir elementos."
    },

    {
        nombre: "DOM",
        descripcion: "Representación de los elementos HTML."
    },

    {
        nombre: "React",
        descripcion: "Biblioteca para crear interfaces."
    }

];

const contenedor = document.getElementById("contenedor");

function mostrarTarjetas(lista){

    contenedor.innerHTML = "";

    lista.forEach((tecnologia)=>{

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("flex-item");

        tarjeta.innerHTML = `
            <h3>${tecnologia.nombre}</h3>
            <br>
            <p>${tecnologia.descripcion}</p>
        `;

        contenedor.appendChild(tarjeta);

    });

}

mostrarTarjetas(tecnologias);

document.getElementById("ordenarAZ").addEventListener("click",()=>{

    tecnologias.sort((a,b)=>a.nombre.localeCompare(b.nombre));

    mostrarTarjetas(tecnologias);

});

document.getElementById("ordenarZA").addEventListener("click",()=>{

    tecnologias.sort((a,b)=>b.nombre.localeCompare(a.nombre));

    mostrarTarjetas(tecnologias);

});

let resaltado = false;

document.getElementById("resaltar").addEventListener("click",()=>{

    const tarjetas = document.querySelectorAll(".flex-item");

    resaltado = !resaltado;

    tarjetas.forEach((tarjeta)=>{

        if(resaltado){

            tarjeta.style.background = "#FEF08A";
            tarjeta.style.border = "3px solid orange";

        }else{

            tarjeta.style.background = "white";
            tarjeta.style.border = "none";

        }

    });

});