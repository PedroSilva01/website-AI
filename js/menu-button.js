// Obtém uma referência à div e ao botão
const div = document.getElementById('popupMenu');
const botao = document.getElementById('btnMenu');

// Função para exibir a div
function exibirDiv() {
  div.style.display = 'flex';
}

// Função para ocultar a div
function ocultarDiv() {
  div.style.display = 'none';
}

// Função para lidar com o clique fora da div
function cliqueForaDiv(event) {
  if (!div.contains(event.target) && event.target !== botao) {
    ocultarDiv();
  }
}

// Adiciona o evento de clique ao botão
botao.addEventListener('click', exibirDiv);

// Adiciona o evento de clique ao documento inteiro
document.addEventListener('click', cliqueForaDiv);
