const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// criando um elemento p
const pMensagem = document.createElement("p");

function clearForm() {
    inputNota.value = "";
}

button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputNotaValue = inputNota.value

    // validação
    if (inputNotaValue.trim() === '') {
        pMensagem.textContent = "Campo Obrigatório";
        inputNota.insertAdjacentElement("afterend", pMensagem)
        pMensagem.setAttribute("class", "error")
        return false;
    }

    // lógica
    if (inputNotaValue >= 6) {
        alert("Você está aprovado");
    } else {
        alert("Você está reprovado");
    }

    pMensagem.classList.add("d-none");
    clearForm
})