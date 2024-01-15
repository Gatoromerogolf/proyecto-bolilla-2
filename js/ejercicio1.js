
// contar los caracteres de un texto sin considerar los espacios.

const oracion = "Hola gente como estan todos"

let largo = oracion.length
console.log(largo)

const deletreo = (oracion.split(""))
console.log(deletreo);

deletreo.push(99)

console.log(deletreo);
  
let blancos = 0;
for(let i=0; i<largo; i++){
    if (deletreo[i] == " "){
        blancos++}
    }

console.log("caracteres no blancos: " + (largo - blancos))

// otra opción con for of
blancos = 0
for (let valor of deletreo) {
  if (valor == " "){
    blancos++
  }
}
console.log("Caracteres no blancos con for of: " + (largo - blancos))

//  otra mucho más facil.
let oracion2 = oracion.replaceAll(' ', '') /* elimina los espacios en blanco - reemplaza los espacios por  nada*/  
console.log("Largo sin blancos " + oracion2.length)
console.log(oracion2)
// si uso "replace"   solo reemplaza el primer valor.   con "replaceAll" reemplaza todos