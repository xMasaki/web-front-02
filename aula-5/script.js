document.cookie = "username=Caio"

let nome = "Caio"

localStorage.setItem('nome',nome)

localStorage.getItem('nome')
localStorage.removeItem('nome')
localStorage.clear()

// sessionStorage é semelhante al localStorage


/*
Se usar array
    let nome = ['Caio','Carol','Pedro']
    let nomeJson = JSON.stringify(nome)
    localStorage.setItem('nome',nomeJson)

    const nomes = JSON.parse(localStorage.getItem(nomeJson))
*/

// Favoritos
/*
- Criar um array []
- Inserir o ícone
*/

