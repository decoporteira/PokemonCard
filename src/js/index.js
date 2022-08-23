/*
Objetivo 1 - quandio clicar na seta de avançar tmos que mostrar o ŕoximo cartão da lista
  passo 1 - pegar o elemento html da seta avançar
  passo 2 - identificar o clique do usúario na seta de avançar
  passo 3 - aparecer o pŕoximo cartão da lista
  passo 4 - buscar o cartão seleciodo e esconder a outra
  
  
Objetivo 2 - quanto clicarmos na seta 
  */
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0;
function apagarSelecionado()
{
  cartoes[cartaoAtual].classList.remove('selecionado')
}
function addSelecionado()
{
  cartoes[cartaoAtual].classList.add('selecionado')
}

btnAvancar.addEventListener('click', function (){
  apagarSelecionado();
  if (cartaoAtual === cartoes.length - 1) {
    cartaoAtual = 0;
  } else {
    cartaoAtual++;
  }
  addSelecionado();
  

});

btnVoltar.addEventListener('click', function (){
  apagarSelecionado();
  if (cartaoAtual == 0) {
    cartaoAtual = 2;
  } else {
    cartaoAtual--;
  }
  addSelecionado();
  

});


  