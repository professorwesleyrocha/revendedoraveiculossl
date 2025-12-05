function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = src="img/menu-burgue.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/icone-fechar.png";
    }
}


var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}
// Obtém o elemento modal
var modal = document.getElementById("modal-aviso");

// Função para abrir o modal quando a página carregar
window.onload = function() {
  modal.style.display = "flex"; // Usa flex para centralizar
}

// Função para fechar o modal (usada nos botões)
function fecharModal() {
  modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora do conteúdo dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}