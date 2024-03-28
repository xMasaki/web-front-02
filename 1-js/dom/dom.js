
/*
<h1 onclick="this">Clique Aqui</h1>  -> this nesse contexto é ele mesmo

<h1 onclick="this.style.color = 'red'">Clique Aqui</h1>  -> muda o "Clique Aqui" para vermelho
*/



/*
function changeH1(){
    let h1 = document.getElementsByTagName("h1")[0]
    console.log(h1)
}

<input type="text" onchange="changeH1()">  -> vai printar <h1>Clique Aqui</h1> quando input preenchido
*/


/*
function changeH1(qqtxt){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = qqtxt.value
}

<input type="text" onchange="changeH1(this)">  -> vai printar <h1>Clique Aqui</h1> quando input preenchido

*/

// onchange="" -> muda depois de clicar fora do input
// oninput=""  -> muda automaticamente




/*
<style>
        div{
            display: inline-block;
            padding: 20px;
            font-size: 2rem;
            background-color: cornflowerblue;
            color: aliceblue;
        }
    </style>

function hideH1(){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.style.display = "none"
}

<div onclick="hideH1()">Click</div>  -> quando clica some o h1

*/