// Función para validar que la edad esté en el rango de 1 a 120 años
function validarEdad(edad) {
  return edad >= 1 && edad <= 120;
}

// Array para almacenar las edades
let edades = [4, 45, 89, 72, 35, 15, 22, 7, 35, 67];

// Variables para contadores
let menoresEdad = 0;
let mayoresEdad = 0;
let adultosMayores = 0;
let sumaEdades = 0;
let edadMinima = Infinity;
let edadMaxima = -Infinity;

// Recorrer el array de edades
for (let i = 0; i < edades.length; i++) {
  // Validar que la edad esté en el rango
  while (!validarEdad(edades[i])) {
      alert("Ingrese una edad válida (entre 1 y 120 años).");
      // Pedir nuevo valor hasta que sea válido
      edades[i] = parseInt(prompt("Ingrese la edad nuevamente:"));
  }

  // Contar personas menores de edad
  if (edades[i] < 18) {
      menoresEdad++;
  }

  // Contar personas mayores de edad
  else {
      mayoresEdad++;

      // Contar adultos mayores
      if (edades[i] >= 60) {
          adultosMayores++;
      }
  }

  // Calcular suma de edades
  sumaEdades += edades[i];

  // Encontrar la edad mínima
  if (edades[i] < edadMinima) {
      edadMinima = edades[i];
  }

  // Encontrar la edad máxima
  if (edades[i] > edadMaxima) {
      edadMaxima = edades[i];
  }
}

// Calcular promedio de edades
let promedioEdades = sumaEdades / edades.length;

// Mostrar resultados
console.log("Personas menores de edad: " + menoresEdad);
console.log("Personas mayores de edad: " + mayoresEdad);
console.log("Adultos mayores de 60 años: " + adultosMayores);
console.log("Edad mínima: " + edadMinima);
console.log("Edad máxima: " + edadMaxima);
console.log("Promedio de edades: " + promedioEdades);
