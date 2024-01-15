//  elegir maximo y minimo

let array = [1, 3, 20, 1900, -20, 800]

let max = Math.max.apply(Math, array)
console.log(max);

let min = Math.min.apply(Math, array)
console.log(min);


//  funcion numero random

// numero aleatorio entre 0 (inluido) y 1 (no incluido)
let randomFloat = Math.random()
console.log(randomFloat);

let random = Math.floor(Math.random() * (10 - 0 + 1)) + 0
console.log(random)
/*  ...(Max - min) + 1 (siempre +1) más el número que pasamos como mínimo: 0*/

let randomDec = Math.floor(Math.random() * (1 - 0 + 1)) + 0
console.log(randomDec);

let randomRango = Math.floor(Math.random() * (12800 - 11 + 1)) + 11
console.log(randomRango)






