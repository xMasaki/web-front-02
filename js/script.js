const buttonMedicamentos = document.querySelector("#medicamentos");
const listaRemedios = document.querySelector(".remedios");

// variáveis da validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonValidacao = document.querySelector("button");

function clearform() {
    campoNome.value = '';
    campoCidade.value = '';
}

// função de validação
buttonValidacao.addEventListener("click", function(event) {
    event.preventDefault();
    // console.log("aqui é um evento", event);
    // console.log(campoNome.value);
    if(campoNome.value.trim() === '') {
        alert("Preencha o campo nome");
        return; //= return false
    }

    if(campoCidade.value.trim() === '') {
        alert("Preencha o campo cidade");
        return false;
    }

    clearform();
});

buttonMedicamentos.addEventListener("click", function() {
    listaRemedios.classList.add("d-block");
});