// Función para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  // Función para calcular el perímetro de un triángulo
  function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }
  
  // Función para calcular el área de un rectángulo
  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  // Función para calcular el perímetro de un rectángulo
  function calcularPerimetroRectangulo(lado1, lado2) {
    return 2 * (lado1 + lado2);
  }
  
  // Función para calcular el área de un cuadrado
  function calcularAreaCuadrado(lado) {
    return lado * lado;
  }
  
  // Función para calcular el perímetro de un cuadrado
  function calcularPerimetroCuadrado(lado) {
    return 4 * lado;
  }
  
  // Función para calcular el área de un círculo
  function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
  }
  
  // Función para calcular el perímetro de un círculo
  function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
  }
  
  // Ejemplos de uso
  console.log("Área del triángulo:", calcularAreaTriangulo(5, 8));
  console.log("Perímetro del triángulo:", calcularPerimetroTriangulo(3, 4, 5));
  
  console.log("Área del rectángulo:", calcularAreaRectangulo(6, 9));
  console.log("Perímetro del rectángulo:", calcularPerimetroRectangulo(6, 9));
  
  console.log("Área del cuadrado:", calcularAreaCuadrado(4));
  console.log("Perímetro del cuadrado:", calcularPerimetroCuadrado(4));
  
  console.log("Área del círculo:", calcularAreaCirculo(3));
  console.log("Perímetro del círculo:", calcularPerimetroCirculo(3));
  
