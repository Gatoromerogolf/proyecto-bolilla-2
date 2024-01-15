console.log(
  "Bienvenido a la web de bolilla.   Tenés la fortuna de pertenecer a este grupo exclusivo.   En esta web tendrás toda la información de la actividad del grupo: histórica, presente y futura.   Que Dios te ayude "
);

let nombre = "pepe";
console.log(nombre);
let nombre2 = "francisco";
console.log(nombre2);

let string1 = "Hola";
let string2 = "Hola";

let comparacion = string1 == string2;
console.log("String1 vs string2 " + comparacion);

let vector1 = [1, 2, 3];
let vector2 = [1, 2, 3];
let compavecto = vector1 == vector2;
console.log("Vector 1 vs vector 2 " + compavecto);

// Usando el método every()
let areEqual =
  vector1.length === vector2.length &&
  vector1.every(function (element, index) {
    return element === vector2[index];
  });

if (areEqual) {
  console.log("Los arrays son iguales");
}

let valor = "xxxlluvioso";

switch (valor) {
  case "soleado":
    console.log("hay sol");
  case "otro":
    console.log("no se sabe");
  case "lluvioso":
    console.log("llueve");
  default:
    console.log("es cualquiera");
  /*    case (valor = 15): console.log("la pego")*/
}

/* operador ternario */
let unaVariable = true;

unaVariable ? console.log("Sale por true") : console.log("Sale por false");
