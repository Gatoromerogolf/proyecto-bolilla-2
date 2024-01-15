// representar el dia de hoy con el objeto DATE

let fecha= new Date()
console.log(fecha)
let dia=fecha.getDate()
console.log (dia)
let mes=fecha.getMonth()
console.log (mes + 1)
let año=fecha.getFullYear()
console.log (año);
let hora=fecha.getHours()
console.log(hora)
let minutos= fecha.getMinutes()
console.log(minutos)
console.log (`el dia de hoy es ${dia} de ${mes} de ${año}`)

switch (mes) {
  case 0:
    mes = "Enero";
    break;
  case 1:
    mes = "Febrero";
    break;
  case 2:
    mes = "Marzo";
    break;
  case 3:
    mes = "Abril";
    break;
  case 4:
    mes = "Mayo";
    break;
  case 5:
    mes = "Junio";
    break;
  case 6:
    mes = "Julio";
    break;
  case 7:
    mes = "Agosto";
    break;
  default:
    mes = "Otros";
    break;
}

console.log (`el dia de hoy es ${dia} de ${mes} de ${año}`)

