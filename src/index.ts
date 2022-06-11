//Clase 15 - Viernes 10 de junio de 2022 - EJERCICIOS DE REPASO
//Ejercicio N° 5 - Consigna:
/* 
En un supermercado, el conteo de productos totales
se hace semestralmente. ¡Hacer funciones!
Calcula:
* El promedio de cada semestre de ventas de productos
* El promedio anual de productos
* El promedio de ventas trimestrales
* El mes que más se vendió en cada semestre
primerSemestre [234,345,560,230,765,79]
segundoSemestre [145,876,367,290,100,356]*/

//(PSEUDOCÓDIGO)
/*
Obtener promedio semestral --- arreglo, longitud
indice
sumaTotal
promedio

for indice comience en 0, que vaya desde índice < longitud
y que el indice incremente en 1

sumaTotal += arreglo[indice]
------------------------
promedio = sumaTotal/longitud

retornamos el promedio
*/

let primerSemestre: number[] = [234, 345, 560, 230, 765, 79];
let segundoSemestre: number[] = [145, 876, 367, 290, 100, 356];
let longitud: number = 6;
let indice: number = 0;

function obtenerPromedioSemestral(arreglo: number[], longitud: number): number {
  let sumaTotal: number = 0;
  let promedio: number = 0;

  for (indice = 0; indice < longitud; indice++) {
    sumaTotal += arreglo[indice];
  }
  promedio = sumaTotal / longitud;
  return promedio;
}

console.log(
  "El promedio del primer semestre es: " +
    obtenerPromedioSemestral(primerSemestre, longitud)
);
console.log(
  "El promedio del segundo semestre es: " +
    obtenerPromedioSemestral(segundoSemestre, longitud)
);

function obtenerPromedioAnual(
  arreglo1: number[],
  arreglo2: number[],
  longitud: number
): number {
  let sumaTotal: number = 0;
  let promedio: number = 0;

  for (indice = 0; indice < longitud; indice++) {
    sumaTotal += arreglo1[indice] + arreglo2[indice];
  }
  promedio = sumaTotal / (longitud * 2);
  return promedio;
}

console.log(
  "El promedio anual es: " +
    obtenerPromedioAnual(primerSemestre, segundoSemestre, longitud)
);

function obtenerPromedioTrimestral(
  arreglo1: number[],
  arreglo2: number[],
  longitud: number
): number {
  let sumaTotal: number = 0;
  let promedio: number = 0;

  for (indice = 0; indice < longitud; indice++) {
    sumaTotal += arreglo1[indice] + arreglo2[indice];
  }
  promedio = sumaTotal / 4;
  return promedio;
}
console.log(
  "El promedio trimestral es: " +
    obtenerPromedioTrimestral(primerSemestre, segundoSemestre, longitud)
);

let mesesPrimerSemestre: string[] = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio"
];
let mesesSegundoSemestre: string[] = [
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

function obtenerMaximaVentaSemestral(
  arreglo1: number[],
  longitud: number,
  semestreUno: string[]
): string {
  let max: number = 0;
  let mesMayor: string = "";
  let texto: string = "";

  for (indice = 0; indice < longitud; indice++) {
    if (arreglo1[indice] > max) {
      max = arreglo1[indice];
      mesMayor = semestreUno[indice];
    }
  }
  texto =
    "La venta máxima del semestre fue: " +
    max +
    ". Y se obtuvo en el mes de: " +
    mesMayor;
  return texto;
}

console.log(
  obtenerMaximaVentaSemestral(primerSemestre, longitud, mesesPrimerSemestre)
);
console.log(
  obtenerMaximaVentaSemestral(segundoSemestre, longitud, mesesSegundoSemestre)
);
