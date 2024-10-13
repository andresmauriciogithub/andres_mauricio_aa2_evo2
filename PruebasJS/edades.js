// Almacenar Edades
function esNumeroValido(numero) {
    return !isNaN(numero) && numero >= 1 && numero <= 120;
  }
  
  function obtenerEstadisticas(edades) {
    let menoresEdad = 0;
    let mayoresEdad = 0;
    let adultosMayores = 0;
    let edadMasBaja = Infinity;
    let edadMasAlta = -Infinity;
    let sumaEdades = 0;
  
    for (let i = 0; i < edades.length; i++) {
      const edad = edades[i];
  
      if (edad < 18) {
        menoresEdad++;
      } else if (edad < 60) {
        mayoresEdad++;
      } else {
        adultosMayores++;
      }
  
      if (edad < edadMasBaja) {
        edadMasBaja = edad;
      }
  
      if (edad > edadMasAlta) {
        edadMasAlta = edad;
      }
  
      sumaEdades += edad;
    }
  
    const promedioEdades = sumaEdades / edades.length;
  
    return {
      menoresEdad,
      mayoresEdad,
      adultosMayores,
      edadMasBaja,
      edadMasAlta,
      promedioEdades
    };
  }
  
  const edades = [25, 17, 40, 12, 70, 30, 8, 55, 65, 20]; // Aquí defines las edades
  
  const estadisticas = obtenerEstadisticas(edades);
  
  console.log('--- Estadísticas ---');
  console.log('Menores de Edad:', estadisticas.menoresEdad);
  console.log('Mayores de Edad:', estadisticas.mayoresEdad);
  console.log('Adultos Mayores:', estadisticas.adultosMayores);
  console.log('Edad más Baja:', estadisticas.edadMasBaja);
  console.log('Edad más Alta:', estadisticas.edadMasAlta);
  console.log('Promedio de Edades:', estadisticas.promedioEdades.toFixed(2));
  
