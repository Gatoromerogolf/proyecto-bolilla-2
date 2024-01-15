var nombre = "daniel";
var diez = 10;
let datos = [1, "ale", false];
const año = 2022;
console.log(nombre, diez, datos);

var a = "javascript";
var b = 10;

function globalScope() {
  console.log(a, b);
  if (true) {
    /* esto se ejecuta siempre, siempre es true....*/
    let a = "python";
    let b = 100;
    var c = 9000;
    const XX = "constante";
    console.log(a, b, XX);
  }
}

globalScope();
console.log(a, b);
//console.log (a, b, XX)  /* no tiene valor fuera de la función */
//console.log (a, b, c)  /*c esta definida dentro de la llave....*/

/* var son de scope global, en cambio let, son validas dentro del ambiente de las llaves.*/
/* la impresion fuera de las llaves sigue manteniendo los valores de afuera....*/
