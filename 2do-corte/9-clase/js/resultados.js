let queryBusqueda = location.search //string
let queryString = new URLSearchParams(queryBusqueda)
let personajeBuscado = queryString.get('personaje') //Pepe, Rick, Pedro

fetch(`https://rickandmortyapi.com/api/character/?name=${personajeBuscado}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})

