
// Paso 1: Agrupar los datos por jugador, manteniendo solo pares de fec y neto
const playersData = {};

//if (!playersData[play]): Se está verificando si no existe ningún dato para el jugador con índice play en el arreglo playersData. El ! antes de playersData[play] verifica si es falsy, es decir, si es nulo, undefined, 0, false o una cadena vacía.
//Si la condición del if se cumple (es decir, no hay datos para el jugador), se ejecuta el bloque de código dentro del if.
players2.forEach(({play, fec, neto}) => {
    if (neto > 0) { // Filtra los pares donde neto es mayor a 0
        if (!playersData[play]) {
            playersData[play] = []; //Aquí, se está inicializando el arreglo para el jugador play asignándole un nuevo arreglo vacío.
        }
        playersData[play].push({fec, neto}); // Esto agrega un nuevo objeto al arreglo del jugador play. El objeto tiene dos propiedades: fec y neto. Los valores de estas propiedades parecen provenir de variables o constantes llamadas fec y neto.

        //Entonces, si no existe play, crea el arreglo.
        //Agrega al arreglo los valores fec y neto
    }
  }
);

// Paso 2: Ordenar cada lista de pares por neto dentro de cada grupo de jugador.for (const play in playersData): Esto inicia un bucle for...in que recorre todas las propiedades enumerables del objeto playersData. En cada iteración, la variable play toma el valor de una de las claves (o índices) del objeto.
/* 
playersData[play].sort((a, b) => a.neto - b.neto);: Dentro del bucle, se accede al arreglo asociado con la clave actual (play) en el objeto playersData. Luego, se utiliza el método sort para ordenar este arreglo. La función de comparación pasada a sort compara los valores de la propiedad neto de los objetos en el arreglo.

(a, b) => a.neto - b.neto: Esto es una función de comparación que se utiliza para determinar el orden de los elementos durante la clasificación. Está ordenando los elementos del arreglo en función de sus propiedades neto, en orden ascendente.
Después de ejecutar este código, el arreglo asociado con cada jugador en playersData estará ordenado según los valores de la propiedad neto de los objetos contenidos en esos arreglos.

En resumen, estas instrucciones están diseñadas para recorrer todos los jugadores en playersData y ordenar los arreglos asociados a cada jugador según el valor de la propiedad neto de los objetos contenidos en esos arreglos. */
//
for (const play in playersData) {
    playersData[play].sort((a, b) => a.neto - b.neto);
}

const limiteElementos = 17;

//El método slice devuelve una copia de una porción del arreglo. 
for (play in playersData) {
playersData[play] = playersData[play].slice(0, limiteElementos);}

//Hay que ordenarlo por fec para presentarlo por fecha

for (play in playersData) {
    playersData[play].sort((a, b) => a.fec - b.fec);
}


for (play in playersData) {
    let sumaNetos = 0;
    let promedios = 0;
    for (let i = 0; i < playersData[play].length; i++) {
        sumaNetos += playersData[play][i].neto;}
    playersData[play].sumaNetos = sumaNetos;
    promedios = sumaNetos / playersData[play].length;
    const promedioDec = promedios.toFixed(1);
    playersData[play].promedios = promedioDec;}

for (const key in playersData) {
  if (Array.isArray(playersData[key])) {
    playersData[key].sort((a, b) => a.promedios - b.promedios);
  }
}

let lineaDatos = document.getElementById("lineaScore")


for (const nombreGrupo in playersData) {
  if (playersData.hasOwnProperty(nombreGrupo)) {
    const longitudGrupo = playersData[nombreGrupo].length;
    // Crea una nueva fila (línea de datos) en la tabla
    const lineaDatos = tablaSeis.insertRow();
  
    // Agrega el nombre del grupo como la primera celda
    const nombreCelda = lineaDatos.insertCell(0);
    nombreCelda.textContent = nombreGrupo;

    let sumaPuntos = lineaDatos.insertCell(1);
    sumaPuntos.textContent =  playersData[nombreGrupo].sumaNetos;

    let promedios = lineaDatos.insertCell(2);
    promedios.textContent =  playersData[nombreGrupo].promedios;


    function tieneValor(objetos, valorBuscado) {
      return objetos.some(objeto => objeto.fec === valorBuscado);}

    for (j=1; j<18; j++){
      let casillero = j+2;
      indice = posicionValor(playersData[nombreGrupo], j)
      if (indice === -1){
        let vacio =  lineaDatos.insertCell(casillero);
        vacio.textContent = "--" 
      }
      else{
        neto = lineaDatos.insertCell(casillero)
        neto.textContent = playersData[nombreGrupo][indice].neto;
      }
    }
 
// hay que buscar en que fechas tiene netos... 1, 2, 3 etc.
// se asocia que 1 es la primera fecha (3 febrero, 2 10 febrero etc.)
// -- Se tendría que automatizar para que los datos de cabecera se llenen segun lo que se lea en datos5--

// Como se quiere llenar toda la matriz, el valor buscado es j que indicaria primera, segunda, tercera etc. fecha.... Se busca entonces si player tiene score en la fecha j

// ubica la posición en que se encuentra el valor buscado
    function posicionValor(objetos, valorBuscado) {
      return objetos.findIndex(objeto => objeto.fec === valorBuscado);}


// esta funcion pregunta si existe el valor buscado ( no la usamos )
      function tieneValor(objetos, valorBuscado) {
        return objetos.some(objeto => objeto.fec === valorBuscado);}

  }
}
console.log (playersData)


////   ninguna de estas anduvo

/* 
// Paso 3: Convertir los datos agrupados y ordenados en una matriz
const matrizEjemplo = [];
for (const [play, data] of Object.entries(playersData)) {
    const row = [play]; // La primera columna es el nombre del jugador
    data.forEach(({fec, neto}) => {
        row.push(fec, neto); // Añade los pares ordenados de fec y neto a la fila
    });

    matrizEjemplo.push(row);
} 

console.log (matrizEjemplo)

for (const jugador in playersData) {
  if (playersData.hasOwnProperty(jugador)) {
    const jugadorActual = playersData[jugador];
    console.log (jugadorActual)
    // Hacer algo con jugadorActual
  }
}

console.log (playersData)

for (play in playersData) {
  playersData[play].sort((a, b) => a.promedios - b.promedios);
}

console.log (playersData)

/* Este código realiza los siguientes pasos:

Agrupa los datos por jugador, manteniendo pares de fec y neto.
Ordena cada lista de pares dentro del grupo de cada jugador por el valor de neto en orden ascendente. Esto se logra con la función sort(), comparando los valores de neto de los objetos.
Construye la matriz final con las filas comenzando por el nombre del jugador seguido de los pares fec y neto, que ya están ordenados de manera creciente por neto.
Este enfoque asegura que, dentro de cada fila de la matriz final, los pares (fec, neto) estén ordenados de acuerdo al valor de neto de menor a mayor. */



/* 
// Obtener la tabla y su cuerpo
const miTabla = document.getElementById('miTabla');
const tbody = miTabla.getElementsByTagName('tbody')[0];

// Obtener las filas del tbody
const filas = Array.from(tbody.getElementsByTagName('tr'));

// Ordenar las filas por el segundo (índice 1) td (celda) dentro de cada fila
filas.sort((a, b) => {
  const valorA = parseInt(a.getElementsByTagName('td')[1].textContent, 10);
  const valorB = parseInt(b.getElementsByTagName('td')[1].textContent, 10);
  return valorA - valorB;
});

// Limpiar el contenido actual del tbody
tbody.innerHTML = '';

// Agregar las filas ordenadas al tbody
filas.forEach(fila => {
  tbody.appendChild(fila);
});


Este código utiliza Array.from para convertir la colección de nodos <tr> en un array y luego usa el método sort para ordenar las filas según el valor de la columna de "Edad". Finalmente, reemplaza el contenido actual del <tbody> con las filas ordenadas.

Ten en cuenta que este es solo un ejemplo básico y puede necesitar ajustes según la estructura y contenido específicos de tu tabla. También puedes considerar bibliotecas como jQuery o DataTables si necesitas una solución más avanzada y fácil de usar. */ 