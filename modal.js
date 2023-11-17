alert("tesstee")
const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wrapper");

const clickOpen = function() {
    poupup.classList.add("d-block")
}

button.addEventListener("click", function(){
  poupup.classList.add('d-block');
})

const poupupGeneral = function(event){
    const classOfClickElement = event.target.classList[0];
    console.log(event)
    const clasNameListArray = ["poupup-close", "poupup-link", "poupup-wrapper"];

    const isClassList = clasNameListArray.includes(classOfClickElement);

    if(isClassList) {
        poupup.classList.remove('d-block')
    }
}

button.addEventListener("click", clickOpen)
poupup.addEventListener("click", poupupGeneral)