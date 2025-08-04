"use strict"

const botaoTrocarImage = document.getElementById('trocar-imagem')

function trocarImagem(){
    const imagem = document.getElementById('imagem').value
    document.documentElement.style.setProperty('', imagem)
}

botaoTrocarImage.addEventListener('click', trocarImagem)