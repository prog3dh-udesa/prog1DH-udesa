let btn = document.querySelector('.btn-especial')
// btn.addEventListener('click', function (){
//     let pepe = 'hola pepe'
// })

btn.addEventListener('click', function(e){
    console.log(e)
    console.log(this)
})

let enlace = document.querySelector('section article a')

enlace.addEventListener('click', function(e){
    e.preventDefault()
    alert('Controlamos su comportamiento default')
})

window.addEventListener('load', function(){
    alert('Soy el documento y ya me cargue')
})

window.addEventListener('keypress', function(e){
    console.log(e)
    if(e.key === 'w'){
        console.log('Avanza el personaje')
    }
    if(e.key === 'd'){
        console.log('Avanza a la derecha personaje')
    }
    if(e.key === 'a'){
        console.log('Avanza a la izquierda personaje')
    }
    if(e.key === 's'){
        console.log('Retrocede el personaje')
    }
})

function agregarYSacarDeFavs(id){
    let peliculasFavs = localStorage.getItem('peliculasFavs')
    if(peliculasFavs !== null){
        let arrayParseado = JSON.parse(peliculasFavs)
        let posicionDelIdParametro = arrayParseado.indexOf(id)

        if( posicionDelIdParametro >= 0 ){
            let arrayParseadoSinEsteFav = arrayParseado.slice(posicionDelIdParametro, posicionDelIdParametro + 1)
            let arrayStringificado = JSON.stringify(arrayParseadoSinEsteFav)
            localStorage.setItem('peliculasFavs', arrayStringificado)
        } else {
            arrayParseado.push(id)
            let arrayStringificado = JSON.stringify(arrayParseado)
            localStorage.setItem('peliculasFavs', arrayStringificado)
        }

    } else {
        let nuevoArrayDeFavs = [id]
        let arrayStringificado = JSON.stringify(nuevoArrayDeFavs)
        localStorage.setItem('peliculasFavs', arrayStringificado)
    }
}

let productos = {
    data: [
        {
            id: 1,
            nombre: 'Shampoo',
            precio: '500'
        },
        {
            id: 2,
            nombre: 'Shampoo2',
            precio: '500'
        },
        {
            id: 3,
            nombre: 'Shampoo3',
            precio: '500'
        },
        {
            id: 4,
            nombre: 'Shampoo4',
            precio: '500'
        },
        {
            id: 5,
            nombre: 'Shampoo5',
            precio: '500'
        },
    ]
}

let body = document.querySelector('body')

for(let i = 0; i < productos.data.length; i++){
    body.innerHTML += `<div>
        <h2>${productos.data[i].nombre}</h2>
        <p>${productos.data[i].precio}</p>
        <button onClick='agregarYSacarDeFavs(${productos.data[i].id})'>agregar a favoritos</button>
    </div>`
}