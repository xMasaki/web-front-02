// trazendo o prompt-sync para o nosso projeto - npm i prompt-sync
const leia = require('prompt-sync')()

function getUserInfo(){
    let altura = parseFloat(leia('Digite sua altura')) // parseFloat ou parseInt modifica a variável para int ou float
    let peso = Number(leia('Digite seu peso'))
    
    return {
        pesoInformado: peso,
        alturaInformada: altura
    }
}

function calcImc(alturaDoUsuario = 0, pesoDoUsuario = 0){
    // = 0 vira padrão, caso variável não preenchido
    return pesoDoUsuario / alturaDoUsuario**2
}

function main(){
    let peso = getUserInfo().pesoInformado //.pesoInformado buscando variável do objeto
    let altura = getUserInfo().alturaInformada
    let imc = calcImc(altura, peso)
    console.log(`Seu IMC é ${imc}`)
    //console.log(`Seu IMC é ${imc === 24? 'Você está maromba':'Não'}`) //funciona como if e else
}

main()

function imprimir(idade){
    console.log(idade)
}

const calcIdade = idade => console.log(idade)

calcIdade()

btn1.addEventListener('click',()=>{
    console.log("Hello")
})