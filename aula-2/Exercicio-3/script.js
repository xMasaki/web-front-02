//Faça um programa que indique o maior valor entre 3 números.

function pegarNumeros(){
    let num1 = Number(prompt("Coloque o primeiro número: "))
    let num2 = Number(prompt("Coloque o segundo número: "))
    let num3 = Number(prompt("Coloque o terceiro número: "))

    return [num1,num2,num3]
}

function maiorNumero([num1,num2,num3]){
    let maior
    if (num1 > num2 && num1 > num3){
        maior = num1
    }
    else if (num2 > num1 && num2 > num3){
        maior = num2
    }
    else{
        maior = num3
    }
    console.log(num1,num2,num3)
    return maior
}

function main(){
    let maiorEscolhido = Number(maiorNumero(pegarNumeros()))
    console.log(`O maior valor entre os 3 escolhidos é ${maiorEscolhido}`)
}
main()