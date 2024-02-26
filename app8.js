

/* const playersData = {};
players2.forEach(player => {
    if (!playersData[player.play]) {
        playersData[player.play] = [];
    }
    playersData[player.play].push({ fec: player.fec, neto: player.neto});
});

// Paso 2: Convertir los datos agrupados en una matriz
const matriz = [];
for (const [play, data] of Object.entries(playersData)) {
    const row = [play]; // La primera columna es el nombre del jugador
    data.forEach(d => {
        // Agrega los datos de cada fecha al final de la fila
        // Aquí podrías ajustar qué datos específicos quieres incluir
        row.push(d.fec, d.neto);
    });
    matriz.push(row);
}

console.log(matriz); */


// agrupandolos de a pares:






// Paso 1: Agrupar los datos por jugador, manteniendo solo pares de fec y neto
/* const playersData2 = {};
players2.forEach(({play, fec, neto}) => {
    if (!playersData2[play]) {
        playersData2[play] = [];
    }
    playersData2[play].push([fec, neto]); // Guarda fec y neto como pares
});

// Paso 2: Convertir los datos agrupados en una matriz
const matriz2 = [];
for (const [play, data] of Object.entries(playersData2)) {
    // Comienza cada fila con el nombre del jugador
    const row = [play];
    data.forEach(([fec, neto]) => {
        // Añade los pares de fec y neto a la fila
        row.push(fec, neto);
    });
    matriz2.push(row);
}

console.log(matriz2);


console.log(matriz2[3])

console.log(typeof matriz2) */

/////////////////////////////////////////////7




// Paso 1: Agrupar los datos por jugador, manteniendo solo pares de fec y neto
const playersData = {};
players2.forEach(({play, fec, neto}) => {
    if (neto > 0) { // Filtra los pares donde neto es mayor a 0
        if (!playersData[play]) {
            playersData[play] = [];
        }
        playersData[play].push({fec, neto}); // Mantiene la estructura de objeto para claridad
    }
});

// Paso 2: Ordenar cada lista de pares por neto dentro de cada grupo de jugador
for (const play in playersData) {
    playersData[play].sort((a, b) => a.neto - b.neto);
}

// Paso 3: Convertir los datos agrupados y ordenados en una matriz
const matriz = [];
for (const [play, data] of Object.entries(playersData)) {
    const row = [play]; // La primera columna es el nombre del jugador
    data.forEach(({fec, neto}) => {
        row.push(fec, neto); // Añade los pares ordenados de fec y neto a la fila
    });
/* 
    if (play === 'Edu') {
        row.pop(); // Elimina el último valor neto
        row.pop(); // Elimina el último valor fec asociado
    } */


    matriz.push(row);
}
const limiteElementos = 7;

const matrizLimitada = matriz.map(fila => fila.slice(0, limiteElementos));

console.log(matrizLimitada);

// ordena por fec
// Ordenar cada lista de pares por fec dentro de cada grupo de jugador
for (const filita in matrizLimitada) {
    matrizLimitada[filita].sort((a, b) => a.fec - b.fec);
}

console.log(matrizLimitada);






/* Este código realiza los siguientes pasos:

Agrupa los datos por jugador, manteniendo pares de fec y neto.
Ordena cada lista de pares dentro del grupo de cada jugador por el valor de neto en orden ascendente. Esto se logra con la función sort(), comparando los valores de neto de los objetos.
Construye la matriz final con las filas comenzando por el nombre del jugador seguido de los pares fec y neto, que ya están ordenados de manera creciente por neto.
Este enfoque asegura que, dentro de cada fila de la matriz final, los pares (fec, neto) estén ordenados de acuerdo al valor de neto de menor a mayor. */


