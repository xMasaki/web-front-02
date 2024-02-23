//Será que conseguimos fazer sair o Jankenpon?

function escolha(){
    let escolheu = String(prompt("Coloque pedra, papel ou tesoura"))
    if (escolheu == "pedra"){
        meuValor = 0
    } else if (escolheu == "papel"){
        meuValor = 1
    } else{
        meuValor = 2
    }
    // 0-pedra   1-papel   2-tesoura
    console.log(meuValor)
    return meuValor
}

function escolhaOponente(){
    x = Math.round(Math.random(2)*100000)
    oponenteValor = x%3
    // 0-pedra   1-papel   2-tesoura
    console.log(oponenteValor)
    return oponenteValor
}

function vencedor([meuValor,oponenteValor]){
    if (meuValor == 0){
        if(oponenteValor == 0){
            console.log("Pedra!")
            batalha = 1
        }
        else if (oponenteValor == 1){
            console.log("Papel!")
            batalha = 0
        }
        else {
            console.log("Tesoura!")
            batalha = 2
        }
    }
    if (meuValor == 1){
        if(oponenteValor == 0){
            console.log("Pedra!")
            batalha = 2
        }
        else if (oponenteValor == 1){
            console.log("Papel!")
            batalha = 1
        }
        else {
            console.log("Tesoura!")
            batalha = 0
        }
    }
    if (meuValor == 2){
        if(oponenteValor == 0){
            console.log("Pedra!")
            batalha = 0
        }
        else if (oponenteValor == 1){
            console.log("Papel!")
            batalha = 2
        }
        else {
            console.log("Tesoura!")
            batalha = 1
        }
    }
    //console.log(batalha)
    // 0-derrota   1-empate   2-vitória
    return batalha
}

function main(){
    minhaEscolha = escolha()
    oponenteEscolha = escolhaOponente()
    let ganhador = vencedor([minhaEscolha,oponenteEscolha])
    if (ganhador == 0){
        console.log(`Derrota!`)
    } else if(ganhador == 1){
        console.log("Empate!")
    } else{
        console.log("Vitória!")
    }
}
main()