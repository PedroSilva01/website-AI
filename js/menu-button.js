function exibir() {
    var popup = document.getElementById("popup");
    var imagemAtual = document.getElementById("imagem");
    imagemAtual.src = imagens[indiceAtual];
    popup.style.display = "block";
  }

  function proximo() {
    indiceAtual++;
    if (indiceAtual >= imagens.length) {
      ocultar();
    } else {
      exibir();
    }
  }

  function ocultar() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

  var botaoProximo = document.getElementById("botao-proximo");
  botaoProximo.addEventListener("click", proximo);