// console.log('window', window)
// console.log('document', document)

let tituloPrincipal = document.querySelector('.tituloPpl')
//Para modificar estilos
tituloPrincipal.style.color = 'white'
tituloPrincipal.style.fontSize='64px'
tituloPrincipal.style.backgroundColor='green'

//Para modificar contenido
tituloPrincipal.innerText = 'Que onda la banda'

let articleQueQueria = document.querySelector('.contenedor article')

articleQueQueria.innerHTML += '<p class="txtDesdeJs">El reto fue cambiado y logrado </p>'

let todosLosParrafos = document.querySelectorAll('p')
console.log(todosLosParrafos)