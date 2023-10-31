// JSON = Javascript Object Notation
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

let contenedor = document.querySelector('.contenedor-productos')

for(let i = 0; i < productos.data.length; i++){
    // contenedor.innerHTML += "<article>" + productos.data[i].nombre + "</article>"
    contenedor.innerHTML += `
    <article>
        <h2>
            ${productos.data[i].nombre}
        </h2>
        <h4>
            ${productos.data[i].precio}
        </h4>
        <button onClick='agregarYSacarDelCarrito(${productos.data[i].id})' >Agregar al carrito</button>
    </article>`
}

function agregarYSacarDelCarrito(id){
    let carritoStorage = localStorage.getItem('carrito')
    console.log('Este es el id: ', id)
    if(carritoStorage !== null){
        let carritoParseado = JSON.parse(carritoStorage)
        // [5, 9, 10, 15, 27].indexOf(9) Esto les va a retornar 1
        // [5, 9, 10, 15, 27].indexOf(27) Esto les va a retornar 4
        // [5, 9, 10, 15, 27].indexOf(275) Esto les va a retornar -1
        let posicionDeMiId = carritoParseado.indexOf(id)
        console.log(posicionDeMiId)
        if(posicionDeMiId >= 0){
            let carritoSinElId = carritoParseado.splice(posicionDeMiId, 1)
            console.log(carritoParseado)
            // let carritoStringificado = JSON.stringify(carritoSinElId)
            // localStorage.setItem('carrito', carritoStringificado)
        } else {
            carritoParseado.push(id)
            let carriStringificado = JSON.stringify(carritoParseado)
            localStorage.setItem('carrito', carriStringificado)
        }
    } else {
        let arrCarrito = [id]
        let arrStringificado = JSON.stringify(arrCarrito)
        localStorage.setItem('carrito', arrStringificado)
    }
}


