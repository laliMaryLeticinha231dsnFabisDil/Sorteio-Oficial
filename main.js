const btnSortear = document.querySelector(".sortear"); //
const textarea = document.querySelector("textarea");
const tagResultado = document.querySelector(".resultado p");
const popUpResultado = document.querySelector(".resultado");

function pegarDadosFormulario() {
    const valorCampo = textarea.value;  //pega todos os valores pela virguls
    const listaNomes = valorCampo.split(","); //separa todos os nomes
    const tamanhoArray = listaNomes.length; //conta qunatos nomes tem
    const posicaoNome = gerarNomeAleatorio(tamanhoArray); //escolhe uma posição aleatória
    const nome = listaNomes[posicaoNome];  //guarda o nome sorteado
    mostrarResultado(nome); //mostra o resultado
    textarea.value = ""  //limpa o texto
}
btnSortear.addEventListener('click', pegarDadosFormulario)


function gerarNomeAleatorio(tamanhoArray){
    //retorna o nome
    return Math.floor(Math.random()*(tamanhoArray - 0) + 0)
} 

function mostrarResultado (nome) {
    tagResultado.innerHTML = `resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}