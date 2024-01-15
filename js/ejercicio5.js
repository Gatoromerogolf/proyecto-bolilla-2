//  acomodar textos mal escritos.

let texto = "   ESte es un TExto   mal     escrito       con      espACIOS y mayusculas          "
console.log(texto);

// trim saca los espacios de mas del inicio y final del texto
let textoTrim = texto.trim()
console.log(textoTrim);

//  pasar a minusculas o mayusculas     .toLowerCase  o   .toUpperCase
let textook = texto.trim().toLowerCase().toUpperCase()
console.log(textook);