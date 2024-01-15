var persona = {
  nombre: 'ruben',
  apellido: 'gonzalez',
  edad: 30,
  skills:[
     "cobol",
     "rpg",
     "fortran",
    ],
  perfil:{
    handicap: 25,
    bestScore: 82,
    winnings: 8
  },
  obtenerNombre: function(){
    return `mi nombre es: ${this.nombre} ${this.apellido}`
  },
  obtenerCv: function(){
  return `estoy especializado en ${this.skills}`
  }
}

console.log(persona.skills)
console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);

persona.nombre = 'daniel'
console.log(persona)
console.log(persona.obtenerNombre())
console.log(persona.obtenerCv())

console.log(persona.perfil.handicap)

//METODOS

// object.assign  -  copia todo un objeto en otro (por ej para no modificar el original.)
const copyPersona = Object.assign({}, persona)
console.log(copyPersona)

// object.keys  -  nos da los nombres de las claves
let claves = Object.keys(copyPersona)
console.log(claves)

let datoPerfil = Object.keys(copyPersona.perfil)
console.log(datoPerfil)

// object.values  -  devuelve los valores de las claves
const valores = Object.values(copyPersona)
console.log(valores)

// object.entries   -  devuelve clave y valores
const entradas = Object.entries(copyPersona)
console.log(entradas)

// object.hasownproperty - devuelve true or false si existe una clave en el objeto
console.log(copyPersona.hasOwnProperty("nombre"))
console.log(copyPersona.hasOwnProperty("titulo"))