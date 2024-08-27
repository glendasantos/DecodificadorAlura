function criptografaTexto(acao) {

  let texto = document.querySelector('textarea').value;

  entrada = [/e/g, /i/g, /a/g, /o/g, /u/g]
  saida = ['enter', 'imes', 'ai', 'ober', 'ufat']

  entradaDesc = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g]
  saidaDesc = ['e', 'i', 'a', 'o', 'u']
  for (i = 0; i < 5; i++) {
    if (acao == 'crip') {
      texto = texto.replace(entrada[i], saida[i]);
    } else if (acao == 'descrip') {
      texto = texto.replace(entradaDesc[i], saidaDesc[i]);
    }

  }

  let conteudoCaixa = document.getElementById("area-de-texto-2-2");

  conteudoCaixa.innerHTML = texto;

  console.log(texto)

  document.getElementById("imagem").style.display = "none";
  document.getElementById("area-de-texto-2-1").style.display = "none";
  document.getElementById("botao-copiar").style.display = "flex";
}

function botaoCopiar() {

  var content = document.getElementById("area-de-texto-2-2");

  navigator.clipboard.writeText(content.innerHTML);
  alert("Texto Copiado")

}
