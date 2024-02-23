const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes') // pega informação do html

//cria o elemento li
const itemLista = document.createElement('li')

//pega input
const textoUsuario = document.querySelector('#filmeInput')


btn1.addEventListener('click', ()=>{
    // adiciona um li na lista
    listaFilmes.append(itemLista)
    //adiciona o texto do input na linha
    itemLista.innerHTML=textoUsuario.value
    //adiciona uma classe
    //itemLista.classList.add(active)
    //muda o css
    itemLista.style.backgroundColor = "red"
} )