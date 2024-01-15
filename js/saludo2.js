//var nombre = "Luisina";
var apellido ="de Paula";
var edad = 30;
var presenteONo = true;
var estatura = 1.67;

//   var    let   const

if (true) {
    var nombre = "Suscribite";
  }
  
  console.log(nombre);

  const email = "rubengarcia@gmail.com";

  //email = "otrovalor@gmail.com";

console.log("Nombre: " + nombre + " " + typeof nombre);
console.log("Apellido: " + apellido + " " + typeof apellido);
console.log("Edad: " + edad + " " + typeof edad);
console.log("Estatura: " + estatura + " " + typeof estatura);
console.log("Presente: " + presenteONo + " " + typeof presenteONo);

alert ("Hola mundo con JS y poné plata " + nombre);

//var  let  const

comida = 2800 + 1300;
bebida = 900 + 650;
cena = comida + bebida;

alert ("total de la bebida: "  + bebida);
alert ("total de la comida: " +  comida);
alert ("Total general:  " + cena + " tpo comida: " + (typeof comida));


if (cena > 5000){
  alert ("Esto es un afano: " + cena)
}
else {
  alert ("Buen precio");
}

color = "rojo";
cuenta = 0;
while (color !== "fin"){
  color = prompt("Escribi un color primario.  Con 'fin' termina");
  cuenta++;
  alert ("Cuenta: " + cuenta + " color: " + color);
switch (color){
  case "verde":
    alert ("pusiste verde");
    break;

  case "azul":
    alert ("pusiste azul");
    break

    case "negro":
      alert ("Pusiste negro");
      break}}

    for (var i=1; i<5; i++){
      alert ("Vuelta n° " + i);
      }

  j = 0;
  do {
    alert ("Cartelito menor que 5#" + j);
    j++;} 
    while (j<5);

    var contador = 1;
    do {console.log (contador);
    contador++;}
    while (contador < 36);
    alert ("Feliz Año Nuevo");

    contador = 10;
    do {console.log (contador);
      contador--;}
    while (contador >= 0);

    for (contador = 1; contador <= 35; contador++)
       {
          console.log (contador);
        }
