const personas = [];

function agregarPersona() {
  const persona = {};
  persona.nombre = "Andres Mauricio Montañez";
  persona.cedula = "79990741";
  persona.fechaNacimiento = "21/02/1983";
  persona.email = "maurommtt@gmail.com";
  persona.ciudadResidencia = "Bogotá";
  persona.ciudadOrigen = "Bogotá";

  persona.cancionesFavoritas = [
    { artista: "Ed Sheeran", cancion: "Photograph" },
    { artista: "Lewis Capaldi", cancion: "Someone You Loved" },
    { artista: "Linkin Park", cancion: "New Divice" },
  ];

  personas.push(persona);

  console.log("Persona agregada exitosamente.");
}

function mostrarInformacionPersona() {
  const posicion = 0; // En este ejemplo, solo hay una persona en el arreglo (posición 0).

  if (posicion >= 0 && posicion < personas.length) {
    const persona = personas[posicion];
    console.log("\nInformación de la persona:");
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Cédula: ${persona.cedula}`);
    console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    console.log(`Correo Electrónico: ${persona.email}`);
    console.log(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
    console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);
    console.log("Artistas y Canciones Favoritas:");
    persona.cancionesFavoritas.forEach((cancion, index) => {
      console.log(`${index + 1}. ${cancion.artista}: ${cancion.cancion}`);
    });
  } else {
    console.log("La posición ingresada no es válida.");
  }
}

let opcion;
do {
  console.log("\nMenú Principal:");
  console.log("a. Agregar persona");
  console.log("b. Mostrar información de una persona por posición");
  console.log("c. Salir");

  opcion = prompt("Ingrese la opción deseada:");

  switch (opcion) {
    case "a":
      agregarPersona();
      break;
    case "b":
      mostrarInformacionPersona();
      break;
    case "c":
      console.log("Saliendo del programa. ¡Hasta luego!");
      break;
    default:
      console.log("Opción no válida. Por favor, ingrese una opción válida.");
  }
} while (opcion !== "c");
