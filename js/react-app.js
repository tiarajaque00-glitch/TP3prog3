const { useState } = React;

function FormularioPersona({ agregarPersona }) {

    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        altura: "",
        peso: ""
    });

    function cambiar(e) {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    function enviar(e) {
        e.preventDefault();
        if (
            formulario.nombre === "" ||
            formulario.apellido === "" ||
            formulario.edad <= 0 ||
            formulario.altura <= 0 ||
            formulario.peso <= 0
        ) {

            alert("Complete correctamente todos los datos.");
            return;
        }

        agregarPersona({
            ...formulario,
            edad: Number(formulario.edad),
            altura: Number(formulario.altura),
            peso: Number(formulario.peso)
        });

        setFormulario({
            nombre: "",
            apellido: "",
            edad: "",
            altura: "",
            peso: ""
        });
    }

    return (

        <form onSubmit={enviar}>
            <input
                name="nombre"
                placeholder="Nombre"
                value={formulario.nombre}
                onChange={cambiar}
            />

            <input
                name="apellido"
                placeholder="Apellido"
                value={formulario.apellido}
                onChange={cambiar}
            />

            <input
                name="edad"
                type="number"
                placeholder="Edad"
                value={formulario.edad}
                onChange={cambiar}
            />

            <input
                name="altura"
                type="number"
                step="0.01"
                placeholder="Altura"
                value={formulario.altura}
                onChange={cambiar}
            />

            <input
                name="peso"
                type="number"
                step="0.1"
                placeholder="Peso"
                value={formulario.peso}
                onChange={cambiar}
            />
            <button>Agregar Persona</button>
        </form>
    );
}
function TablaPersonas({ personas, eliminarPersona }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>IMC</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {
                    personas.map((persona, indice) => {
                        const imc = (
                            persona.peso /
                            (persona.altura * persona.altura)
                        ).toFixed(2);
                        return (

                            <tr key={indice}>
                                <td>{persona.nombre}</td>
                                <td>{persona.apellido}</td>
                                <td>{persona.edad}</td>
                                <td>{persona.altura}</td>
                                <td>{persona.peso}</td>
                                <td>{imc}</td>
                                <td>

                                    <button
                                        onClick={() => eliminarPersona(indice)}
                                    > Eliminar
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}
function App() {

    const [personas, setPersonas] = useState([]);
    function agregarPersona(persona) {
        setPersonas([
            ...personas,
            persona
        ]);
    }

    function eliminarPersona(indice) {
        setPersonas(
            personas.filter((_, i) => i !== indice)
        );
    }
    return (

        <div className="card">
            <h2>Registrar Persona</h2>
            <FormularioPersona
                agregarPersona={agregarPersona}
            />
            <TablaPersonas
                personas={personas}
                eliminarPersona={eliminarPersona}
            />
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("root")
).render(<App />);