/*
- Abaixo do array "frutas", existir, exiba no console a mensagem "A string "abacaxi" existe no array frutas"
*/

let frutas = ["morango", "banana", "mamão", "pera"]

if(frutas.includes("abacaxi")) {  
    console.log("A string 'abacaxi' existe no array frutas");
} else if (frutas.includes("pera")) {
    console.log("A string 'pera' existe no array frutas");
} else {
    console.log("Nem pera nem abacaxi existem no array 'frutas'.");
}
