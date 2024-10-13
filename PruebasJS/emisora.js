class Persona {
    constructor(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen) {
      this.nombre = nombre;
      this.cedula = cedula;
      this.fechaNacimiento = fechaNacimiento;
      this.correo = correo;
      this.ciudadResidencia = ciudadResidencia;
      this.ciudadOrigen = ciudadOrigen;
      this.cancionesFavoritas = [];
    }
  
    agregarCancionFavorita(artista, titulo) {
      if (this.cancionesFavoritas.length < 3) {
        this.cancionesFavoritas.push({ artista, titulo });
       
      } else {
        console.log(`${this.nombre} ya tiene 3 canciones favoritas. No se pueden agregar más.`);
      }
    }
  
    mostrarInformacionPersonal() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Cédula: ${this.cedula}`);
      console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
      console.log(`Correo: ${this.correo}`);
      console.log(`Ciudad de Residencia: ${this.ciudadResidencia}`);
      console.log(`Ciudad de Origen: ${this.ciudadOrigen}`);
      console.log(`Canciones Favoritas:`);
      this.cancionesFavoritas.forEach((cancion, index) => {
        console.log(`  ${index + 1}. ${cancion.titulo} - ${cancion.artista}`);
      });
    }
  }
  
  const personas = [];
  
  function agregarPersona() {
    const nombre = "Andrés Mauricio Montañez";
    const cedula = "79990741";
    const fechaNacimiento = "21/02/1983";
    const correo = "maurommtt@gmail.com";
    const ciudadResidencia = "Bogotá";
    const ciudadOrigen = "Bogotá";
  
    const nuevaPersona = new Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen);
    nuevaPersona.agregarCancionFavorita("Ed Sheeran", "Photograph");
    nuevaPersona.agregarCancionFavorita("Lewis Capaldi", "Someone You Loved");
    nuevaPersona.agregarCancionFavorita("Linkin Park", "New Divide");
  
    personas.push(nuevaPersona);
  
    console.log(`${nombre} ha sido agregado(a) exitosamente.`);
  }
  
  function mostrarInformacionPersonal() {
    const posicion = 1; // Solo hay una persona en el array según los datos proporcionados
    const persona = personas[posicion - 1];
  
    if (persona) {
      persona.mostrarInformacionPersonal();
    } else {
      console.log("La posición ingresada no es válida.");
    }
  }
  
  agregarPersona();
  mostrarInformacionPersonal();
  