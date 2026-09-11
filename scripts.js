
document.addEventListener("DOMContentLoaded", function () {

// Localiza o formulário pelo id="formulariCompra"
var formulario = document.getElementById("formularioCompra");

// Escuta o evento de envio do formulário
formulario.addEventListener("submit", function (evento) {

// Impede a página de recarregar ou navegar para outro lugar
evento.preventDefault();

// Coleta os valores preenchidos pelo usuário nos campos do formulário
var nome = document.getElementById("nome").value;
var produto = document.getElementById("produto").value;
var quantidade = document.getElementById("quantidade").value;
var prioridade = document.getElementById("prioridade").value;

// Chama a função que monta e exibe o resumo
exibirResumo(nome, produto, quantidade, prioridade);
});
});

/**
* Monta e exibe o resumo da solicitação ao final da página.
*
* @param {string} nome - Nome do solicitante
* @param {string} produto - Item a ser comprado
* @param {string} quantidade - Quantidade solicitada
* @param {string} prioridade - Prioridade da solicitação
*/

//exibição do resumo da solicitação
function exibirResumo(nome, produto, quantidade, prioridade) {

var divResumo = document.getElementById("resumo");

divResumo.innerHTML = "<h2>Resumo da Solicitação</h2>";

//solicitante, nome
var solicitante = document.createElement("p");
solicitante.textContent = "Nome do Solicitante: " + nome;
divResumo.appendChild(solicitante);

//items, produto
var items = document.createElement("p");
items.textContent = "Item a ser Comprado: " + produto;
divResumo.appendChild(items);

//quantidade
var quantidadeElement = document.createElement("p");
quantidadeElement.textContent = "Quantidade: " + quantidade;
divResumo.appendChild(quantidadeElement);

//prioridade
var nivelPrioridade = document.createElement("p");
nivelPrioridade.textContent = "Prioridade: " + prioridade;
divResumo.appendChild(nivelPrioridade);

//resumo
var resumo = document.createElement("p");
resumo.textContent = "Status: Aguardando aprovação";
divResumo.appendChild(resumo)
}
