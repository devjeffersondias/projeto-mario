/**
 * Objetivo: ao clicar no botão, abrir o formulário
 * 1 - Pegar o botão -> Qual botão?
 * 2 - Adicionar o evento de clique no botão
 * 3 - Mostrar o formulário -> Qual formulário?
 * 4 - Mostrar máscara de fundo
 *        -Trazer o formulário da esquerda para direita
 *        - Centralizar o formulário na tela
 *        - Exibir a máscara de fundo
 */

const formulario = document.querySelector(".formContato")

const mascara = document.querySelector(".mascara-formulario")

function mostrarFormulario() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderFormulario() {
    formulario.style.left = "-280px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

const botao = document.querySelector("button")
botao.addEventListener("click", mostrarFormulario)
mascara.addEventListener("click", esconderFormulario)
