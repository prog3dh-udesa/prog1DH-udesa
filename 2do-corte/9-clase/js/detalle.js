let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle)
let id = queryStringDetalle.get('id')
let contenedor = document.querySelector('.contenedor-detalle')
let tituloDinamico = document.querySelector('.titulo-dinamico')

fetch(`https://rickandmortyapi.com/api/character/${id}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    tituloDinamico.innerText = `
    <h1>Detalle de personaje: ${data.name}</h1>`
    
    contenedor.innerHTML = `
        <h1>Detalle de personaje: ${data.name}</h1>
        <img src='${data.image}' >
        <h3>${data.species}</h3>
    `
})
.catch(function(err){
    console.log(err)
})