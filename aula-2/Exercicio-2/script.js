//Numa avenida movimentada, o limite de velocidade é de 60km/h.

//Faça um programa que, com base na velocidade informada, notifique ao
//guarda o valor da multa (caso haja). A multa é de R$100 por km ultrapassado.


function dadosVelocidade(){
    let dados = Number(prompt("Qual é a velocidade do veículo?"))
    return dados
}

function calcularValor(vel){
    let pagar
    if (vel < 60){
        console.log(`O veículo não cometeu infração!`)
    }
    else{
        let multiplicador
        multiplicador = vel - 60
        pagar = multiplicador * 100
    }

    return pagar
}

function main(){
    let multa = calcularValor(dadosVelocidade())
    console.log(`O valor a pagar é ${multa}`)
}
main()