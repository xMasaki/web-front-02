const altura = prompt("Digite sua altura: ");
const peso = prompt("Digite seu peso: ");

console.log(altura, peso);

function calc(){
    const res = peso / (altura**2)
    return res
}

console.log(calc());

function valor(res){
    if (res <= 18,5){
        console.log("baixo peso")
    }

    else if (res > 18,5 && res <24,99){
        console.log("normal")
    }

    else if (res > 25 && res < 29,99){
        console.log("Sobrepeso")
    }

    else{
        console.log("Obesidade")
    }
}

console.log (valor())