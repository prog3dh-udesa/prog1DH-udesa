// let container = document.querySelector('.personajes')
// let contador = 1 //2

// fetch('https://rickandmortyapi.com/api/character')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     for(let i = 0; i < data.results.length ; i++){
//         container.innerHTML += `
//             <article>
//                 <img src=${data.results[i].image} />
//                 <h2>${data.results[i].name}</h2>
//             </article>`
//     }
//     contador = contador + 1
// })
// .catch(function(error){
//     console.log(error)
// })


// let boton = document.querySelector('.masPersonajes')
// boton.addEventListener('click', function(){
//     fetch(`https://rickandmortyapi.com/api/character?page=${contador}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         for(let i = 0; i < data.results.length ; i++){
//             container.innerHTML += `
//                 <article>
//                     <img src=${data.results[i].image} />
//                     <h2>${data.results[i].name}</h2>
//                 </article>`
//         }
//         contador = contador + 1
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// })

let apiKey= 'ba0b591fbb4dcbf21e7a279fceca5d5e'
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})