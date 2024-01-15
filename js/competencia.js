let finalistas = new Array("no", "no", "no");
let players =["Panza", "Diegui", "Julito", "Sensei", "Gaby"];
//alert ("Jugadores: " + players[0] + ", " + players[1] + ", " + players[2]);
let valores = [
    [78, 90, 65, 50], //Panza
    [58, 40, 76, 60], //Diegui
    [99, 48, 98, 100, 25], //Julito
    [78, 90,], //Panza
    [78, 90, 65, 50], //Panza
    ];


let scores = valores [0];
alert ("Scores:  " + scores);
alert ("minimo....>" + Math.min(...valores[0]));

function minMax(nros){
    var min = Math.min(...nros);
    return min;
}
var minimo = minMax(scores);
alert ("dentro: " + minimo);


var tuNombre = "Ruben";
(function () {
    "use strict";
    /* Inicio de tu código */
    function greetMe(tuNombre) {
      alert("Hola " + tuNombre);
    }
  
    greetMe("Mundo");
    /* Fin de tu código */
  })();

//for (var k=0; k<players.length; k++) {
//    alert (players [k] + ": " + valores [k] [0] + " , " + valores [k] [1] + " , " + valores [k] [2])
//    }

/*alert ("Length de players: " + players.length);
alert ("Length de valores: " + valores.length);

let vector2 = new Array (1,2);
let vector3 = [1,2,3,4];
let vector4 =  [ [1,2,3,4,5],
                [6,7,8,9,10,11],
                [12,13,14,15],
                [16]
                ];

alert ("VEC2: " + vector2.length);     
alert ("VEC3: " + vector3.length); 
alert ("VEC4: " + vector4.length);

alert ("Elemen VEC 4: " + vector4 [1] [4]);
alert ("Elemen VEC 4- fila 0: " + vector4 [0]);
alert ("Elemen VEC 4- fila 1: " + vector4 [1]);
alert ("Elemen VEC 4- fila 2: " + vector4 [2]);
alert ("Elemen VEC 4- fila 3: " + vector4 [3]);
alert ("Elemen VEC 4- fila 3 - 0: " + vector4 [3] [0]);


//alert("2da columna de 3ra fila: " + (valores[2] [1]));

/*function promedio (num1, num2, num3){
    let valor = (num1 + num2 + num3)/3;
    return valor;
}*/

/*
for (var i=0; i<3; i++) {
    var valorprom = promedio (valores [i] [0], valores [i] [1], valores [i] [2]);
    //alert (players[i] + ", " + valorprom);
    alert ("Indice: " + i + "  promedio: " + valorprom);
    if (valorprom > 70) {
        finalistas [i] = players [i];
        alert ("puso");
        }
    else {
        finalistas [i] = (players [i] + " no clasifico"); 
        alert ("no puso");
        }
}

alert ("Finalistas: " + finalistas[0] + ", " + finalistas[1] + ", " + finalistas[2]);


function promedio (num1, num2, num3){
    let valor = (num1 + num2 + num3)/3;
    return valor;
}


*/
//  otra forma de calculo de promedios:

function calcularPromVal(valores) {   //recibe como parámetros los valores -todos juntos??- se indica la matriz
    let promedios = [];  //aca va a guardar los promedios

    for (let i=0; i<valores.length; i++){  //aca recorre los valores por jugador
        let fila = valores[i]; //toma todos los valores de la fila
        let suma = fila.reduce((total, golpes) => total+golpes,0); //aca calula el promedio con el reduce.....
        promedios[i] = suma/fila.length;
        }
    return promedios;  //devuelve todos los promedios por filas

}
/*  en el cálculo anterior, el largo de la fila es 3 y para todas las filas.
en este caso, el largo es variable (valores.length) y no queda restringido a una longitud dada
permitiría calcular promedios sin largos fijos y ademas con filas variables (algunos más que otros)

// para calcular si clasifica o no (> 70)*/

function evaluarAptitud (players, promedios) {
    for (let i=0; i<valores.length; i++) {
        if (promedios[i] >= 70) {
            alert("Este pasó: " + players[i]);
        }
        else{
            alert("Este NO pasó: " + players[i]);
        }
    }
}

// DESDE ACA LLAMA A LAS FUNCIONES.*/


//let promedios = calcularPromVal(valores);
//evaluarAptitud(players, promedios);  //en este caso no devuelve nada.

/*
        Array.reduce((acumulador, elementoActual) => {
            //logica para combinar el acumulador con el elemento actual
        }, valorInicial)

        DESDE ACA LLAMA A LAS FUNCIONES.*/



