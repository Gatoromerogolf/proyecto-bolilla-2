const arr = []; /* se puede declarar así o tambien   arr = Array() */
let js = "javascript";
let deletreo = js.split("");
console.log(deletreo);
console.log(deletreo[2]);

let varios = "javascript, python, php";
console.log(varios);
var vstxdiv = varios.split(" ");
console.log(vstxdiv);

vstxdiv[0] = "cobol";
console.log(vstxdiv);

/*  metodo  fill   -   rellena*/
const equis = Array(3).fill("Hola");
console.log(equis);

/*  metodo  concat   -  concatenar*/
const primero = [1, 2, 3, 4];
const segundo = [5, 6];
var union = primero.concat(segundo);
console.log(union);

/*  metodo  indexOf   -  verifica si un elemento existe.   Si existe devuelve el indice*/
const numeros = [1, 2, 3, 34, 56, 80, 25, 34, 8, 56, 60, 70];
var respuesta = numeros.indexOf(34);
console.log(respuesta);
var respuesta = numeros.indexOf(500);
console.log(respuesta);

/*  lastIndexOf  indica el ultimo indice.  si se repite, toma el ultimo*/
console.log(numeros.lastIndexOf(56));

/* length   largo del string*/
console.log(numeros.length);

/*  includes  -  true or false segun incluya lo especificado*/
console.log(numeros.includes(70));
console.log(numeros.includes(345));

/*  Array.isArray  -  true or false si lo que se le pasa es un arreglo*/
console.log(Array.isArray(numeros));
console.log(Array.isArray(js));

/*  toString  -  convierte un Array a un string*/
console.log(numeros);
var elemento = numeros.toString();
console.log(elemento);
elemento[1] = 99; /* no cambia nada porque ahora es un string */
console.log(elemento);

/*  join  -  une los elementos de un array con el argumento que se pasa en la función  */
console.log(numeros.join(""));
console.log(numeros.join(" "));
console.log(numeros.join("*"));
console.log(numeros.join("-"));

/*  slice   -  sirve para cortar el array en dos partes, una posic inicial y una final -  el final es indice - 1*/
console.log(numeros.slice(0, 4));
console.log(numeros.slice(4, 8));

/* push  -  pop  -  agrega elemento al final y elimina ultimo elemento */
console.log(numeros.push(999));
/* en el anterior agrego el numero y devuelve el largo actualizado */
console.log(numeros);
numeros.pop(); /* elimina el ultimo elemento */
console.log(numeros);

/*  shift   -   elimina el primer elemento del array */
numeros.shift();
console.log(numeros);
console.log(numeros.shift()); /* te dice cual elimino */
console.log(numeros);

/*  unshift  -  agrega un elemento al inicio */
numeros.unshift(555);
console.log(numeros);

/*  reverse  -  invierte el orden */
console.log(numeros.reverse());
