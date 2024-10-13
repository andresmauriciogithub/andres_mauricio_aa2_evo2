// Definir arreglos para almacenar la información
let personas = [];
let cancionesFavoritas = [];

// Función para agregar una persona
function agregarPersona() {
  let persona = {};

  // Solicitar datos personales
  persona.nombre = prompt("Ingrese el nombre:");
  persona.cedula = prompt("Ingrese el número de cédula:");
  persona.fechaNacimiento = prompt("Ingrese la fecha de nacimiento (DD/MM/AAAA):");
  persona.correo = prompt("Ingrese el correo electrónico:");
  persona.ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
  persona.ciudadOrigen = prompt("Ingrese la ciudad de origen:");

  // Solicitar datos de canciones favoritas
  persona.canciones = [];
  for (let i = 1; i <= 3; i++) {
    let cancion = {};
    cancion.artista = prompt(`Ingrese el artista de la canción favorita #${i}:`);
    cancion.titulo = prompt(`Ingrese el título de la canción favorita #${i}:`);
    persona.canciones.push(cancion);
  }

  // Agregar la persona al arreglo
  personas.push(persona);
  console.log("Persona agregada correctamente.");
}

// Función para mostrar la información personal de una persona por posición
function mostrarInformacionPersonal() {
  let posicion = prompt("Ingrese la posición de la persona en el vector:");
  posicion = parseInt(posicion);

  if (posicion >= 0 && posicion < personas.length) {
    let persona = personas[posicion];
    console.log("Información personal:");
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Cédula: ${persona.cedula}`);
    console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    console.log(`Correo Electrónico: ${persona.correo}`);
    console.log(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
    console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);

    console.log("Canciones Favoritas:");
    persona.canciones.forEach((cancion, index) => {
      console.log(`Canción ${index + 1}: ${cancion.titulo} - ${cancion.artista}`);
    });
  } else {
    console.log("La posición ingresada no es válida.");
  }
}

// Menú principal
while (true) {
  let opcion = prompt("Seleccione una opción:\n a. Agregar persona\n b. Mostrar información personal\n x. Salir");

  if (opcion === 'a') {
    agregarPersona();
  } else if (opcion === 'b') {
    mostrarInformacionPersonal();
  } else if (opcion === 'x') {
    break;
  } else {
    console.log("Opción no válida. Intente de nuevo.");
  }
}
