let miVariableString = "Hola mundo"
let ganaBoca = false
let temasProgUno = [
    'Html',
    'Css',
    'Git y Github',
    'Javascript'
]

let nombre
let apellido
let edad

nombre = "Pepe"
apellido = 'Grillo'
edad = 30

let nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

let peliculasFavs = [
    'Interstellar',
    'Shrek',
    'Toy Story',
    'Barbie',
    'Avengers'
]

let arrComplejo = [
    ["hola", "mundo"], ["hola", "todo", "el", "mundo"]
]

let frutas = ["Banana", "Naranja", "Limón", "Manzana", "Mango"];
let citricos = [
    frutas[1],
    frutas[2]
]
console.log(citricos)
console.log(frutas.length)
console.log(citricos.length)
frutas.push('Frutilla')
frutas.push('Melon')
console.log(frutas)


let arrVacio = []
console.log(arrVacio.length)

let arrDeNumeros = [2,  11, 17, 32, 36, 39]
console.log(arrDeNumeros.length)
console.log("lalalala".length)

//ARBOL GENEALOGICO

let arbolGenealogico = [
    ['Abuelo Pepe', 'Pepa'],
    [],
    ['Tom', 'Jerry'],
    []
]

// arbolGenealogico[1] = ['Catherine', 'Pedro']
arbolGenealogico[1].push('Sofia')
arbolGenealogico[1].push('Carlos')

arbolGenealogico[3].push('Nieto copado')
arbolGenealogico[3].push('Nieto mala onda')

console.log(arbolGenealogico[0][0])
console.log(arbolGenealogico[1][0])
console.log(arbolGenealogico[2][0])
console.log(arbolGenealogico[3][0])