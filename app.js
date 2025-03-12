// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al listado
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminamos espacios innecesarios

    if (nombre === "") {
        alert("Por favor inserte un nombre"); // Validación de entrada vacía
        return;
    }

    amigos.push(nombre); // Agrega el nombre al array
    actualizarListaAmigos(); // Actualiza la lista visual en el HTML
    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiamos la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li"); // Creamos un nuevo elemento <li>
        li.textContent = amigo; // Asignamos el nombre del amigo
        listaAmigos.appendChild(li); // Lo añadimos a la lista
    });

    listaAmigos.style.display = "block"; // Asegura que la lista sea visible
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiamos resultados previos

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear."); // Validación para una lista vacía
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generamos un índice aleatorio
    const amigoElegido = amigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `Amigo elegido: ${amigoElegido}`;
    resultado.appendChild(li); // Mostramos solo el amigo elegido
}
