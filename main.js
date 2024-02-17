var texto = "Navegando pelo universo digital,";
var textoForte = "<strong class='destaque-titulo'> sou uma aspirante apaixonada!</strong>";
var textoelemento = document.querySelector(".apresentacao__conteudo__titulo");
var atraso = 200;
var contador = 0;

function escreverTexto() {
    if (contador < texto.length) {
        textoelemento.innerHTML += texto.charAt(contador);
        contador++;
        setTimeout(escreverTexto, atraso);
    } else {
        textoelemento.innerHTML += textoForte;
    }
}
escreverTexto();
