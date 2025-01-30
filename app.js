// elementos
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Lista nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    inputNombre.value = '';
}

// Función para actualizar la lista
function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(listItem);
    });
}

// Función para sortear
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 amigos para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>TU AMIGO SECRETO ES:<strong>${amigoSecreto}</strong></li>`;
}
