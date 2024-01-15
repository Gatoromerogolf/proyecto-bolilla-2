//vectore y matrices
//let img = document.createElement("img");
//img.src = "js/metodoarray.png";
//document.body.appendChild(img);

let miVector = [1,2,3,4,5];

/*
alert ("Vector: " + miVector);
console.log (miVector);

//primero fila, despues columna
let miMatriz =[[1,2,3],[4.5],[6,7,8,9]];

alert ("Matriz: " + miMatriz);
console.log(miMatriz);

alert("2do elemento del vector: " + miVector[1]);

alert("2da columna de 3ra fila: " + (miMatriz[2] [1]));

(miMatriz[2] [1])++;

alert("2da columna de 3ra fila: " + (miMatriz[2] [1]));

(miMatriz[2] [1]) *= 2;

alert("2da columna de 3ra fila: " + (miMatriz[2] [1]));

// para crear un vector de 3 posiciones

/*let vector = new Array(3);
alert ("Vector " + vector);
vector[0] = "primera posición";
alert ("Vector " + vector);
vector[1] = 4;
vector[2] = "ultima";
vector[4] = "error";
alert ("MI vector:  " + vector);
vector[4]*=2;
alert ("MI vector:  " + vector);

//crear matriz en base a vectores

let matriz = new Array(3);
for (let i = 0; i < 3; i++) {
    matriz[i] = new Array (3);
}

alert ("valor de matriz:  " + matriz)

*/

// para agregar un elemento al final del arreglo
/*
miVector.push(99);
alert ("miVector:  " + miVector);

// agrega al principio de la lista
miVector.unshift(0);
alert ("miVector:  " + miVector);

// para sacar el último, que se puede guardar

let final = miVector.pop()
alert ("miVector:  " + miVector);
alert ("sacado   " + final);

// saca el primero
let primero = miVector.shift(0);
alert ("miVector:  " + miVector);
alert ("sacado   " + primero);

// recorre array
miVector.forEach((elemento) => {
    alert("Recorre: " + elemento);
})

*/

const arrayDeObjetos = [
    {
        nombre: "David", 
        edad: 24,
        comidaFavorita: "Hamburguesa",
    },
    {
        nombre: "Sally",
        edad: 22,
        comidaFavorita: "Shawarma",

    },
    {
        nombre: "Steven",
        edad: 18,
        comidaFavorita: "Pizza",
    },
];

console.log ("Objetos: " + arrayDeObjetos[1]);

let primerObjeto = arrayDeObjetos [0].nombre;
alert ("primer objeto:  " + primerObjeto);

// cambio en el valor de una propiedad del objeto
arrayDeObjetos[0].nombre = "Ruben";
alert ("Nombre cambiado:  " + arrayDeObjetos [0].nombre);

alert ("Todo el primero:  " + arrayDeObjetos[0]);

//agregar una nueva propiedad al objeto
arrayDeObjetos[0].deporte = "Golf";
alert("nueva propiedad: " + arrayDeObjetos[0].deporte);

//para listar los nombres de las propiedades;
let propiedades = Object.keys(arrayDeObjetos[0]);
alert("Todos los nombres: " + propiedades);

// para borrar una propiedad:
delete arrayDeObjetos[0].deporte;
propiedades = Object.keys(arrayDeObjetos[0]);
alert("Todos los nombres: " + propiedades);

// para recorrer un ojeto
for (let key in arrayDeObjetos[0]){
    alert("Propiedades: " + key + " : " + arrayDeObjetos[0][key]) 
}
