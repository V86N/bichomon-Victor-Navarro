console.log(document.title);

//1 Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const titulo = document.getElementById('gen-1')
titulo.innerText = "Generasión 1 Pokimon"

// document.getElementById('gen-1').innerText = "Generasión 1 Pokimon"


console.log(titulo)

//2 Cambia el color de fondo de la primera generación de Pokimon.

const fondoColor = document.getElementsByClassName('infocard-list')
fondoColor[0].style.background = 'red'

//3 Imprime por consola la URL de la página.

console.log(document.URL)

//4 Imprime por consola el dominio de la página

console.log(document.domain)

//5  Imprime todos los nodos de imagen.

const imagenes = document.querySelectorAll('img')
console.log(imagenes)

//6 Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

for (let i=0; i<imagenes.length; i++){
    
    
    imagenes[i].setAttribute('src','https://media.giphy.com/media/2v170e71aanfi/giphy.gif')
    console.log(imagenes[i])
}


