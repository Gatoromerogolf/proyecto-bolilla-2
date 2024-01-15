// calculadora funcional

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const divide = (a, b) => a / b;

let op = "resta"
let a = 20
let b = 30
let resultado = 0;

if (op =='suma'){
    resultado = suma(a, b)
    console.log(resultado);
}
else{
    if (op='resta'){
        resultado = resta(a, b)
        console.log(resultado);
    }
}