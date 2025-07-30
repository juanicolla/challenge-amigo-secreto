// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
   // 1. Capturar el valor del campo de entrada
   let input = document.getElementById("amigo");
   let nombre = input.value.trim(); // trim elimina espacios al inicio y final

   if (nombre === "") {
      alert("Por favor, inserte un nombre.");
      return; // corta la función si no hay nombre
   }

   // 3. Actualizar el array de amigos
   amigos.push(nombre);

   //4. Mostrar el nuevo nombre en la lista del HTML
   actualizarLista();

   // 5. Limpiar el campo de entrada
   input.value = "";
};

function actualizarLista() {
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = ""; // limpiar lista anterior

   // 3. Iterar sobre el arreglo con un bucle for
   for (let i = 0; i < amigos.length; i++) {
      // 4. Crear un nuevo elemento <li> para cada amigo
      let li = document.createElement("li");
      li.textContent = amigos[i];

      // Agregar el <li> a la lista
      lista.appendChild(li);
   }
}

function sortearAmigo () {
   //si no hay amigos
   if (amigos.length === 0) {
      alert("lista vacía.")
   }

   // 2. Generar un índice aleatorio
   let indiceRandom = Math.floor(Math.random() * amigos.length)

   //obtener nombre sorteado
   let amigoSorteado = amigos[indiceRandom];
   
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
