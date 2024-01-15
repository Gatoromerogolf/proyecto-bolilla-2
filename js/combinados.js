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

for (let i = 0; i < arrayDeObjetos.length; i++) {
  console.log("===============================");
  console.log("Nombre:  " + arrayDeObjetos[i].nombre);
  console.log("Edad:  " + arrayDeObjetos[i].edad);
  console.log("Comida:  " + arrayDeObjetos[i].comidaFavorita);
}
console.log("===============================");
const objetoConArray = {
  nombre: "Objeto con Array",
  arr: ["abeja", "banana", "camión", "dado"],
};

objetoConArray.arr.forEach((elemento) => {
  console.log(elemento + " jaja ");
});
console.log("===============================");
for (let i = 0; i < objetoConArray.arr.length; i++) {
  console.log(objetoConArray.arr[i] + " jaja");
}
