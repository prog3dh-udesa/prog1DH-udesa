//OBJETOS LITERALES

let estudiante = {
    nombre: 'Pepe',
    apellido: 'Grillo',
    edad: 22,
    estaCursando: true,
    materiasQueCursa : [
        'Programación',
        'ITCD',
        'Matematicas'
    ],
    saludar: function(){
        return 'Hola, un gusto, mi nombre es ' + this.nombre + ' ' + this.apellido
    },
    tutor: {
        nombre: 'Anselmo',
        apellido: 'Reyes'
    },
    habilidades: [
        {
            puntuacion: 10,
            nombreHabilidad: 'Videojuegos',
            favorito: 'Fortnite'
        },
        {
            puntuacion: 6,
            nombreHabilidad: 'Futbol',
            favorito: 'Futbol 5'
        },
        {
            puntuacion: 8,
            nombreHabilidad: 'Cocinar',
            favorito: 'Milanesas'
        },
    ]
}

let arrayHabilidades = [
    estudiante.habilidades[0].nombreHabilidad,
    estudiante.habilidades[1].nombreHabilidad,
    estudiante.habilidades[2].nombreHabilidad
]
console.log(arrayHabilidades)
const estudianteQueSaluda = estudiante.saludar()

console.log(estudiante.saludar())
console.log(estudiante.tutor.nombre)
console.log(estudiante.habilidades[1].nombreHabilidad)


//Bucles