const buttonMines = document.querySelector('.floating-button');
const imageDefault = document.querySelector('.alert-mines');
const recomended = document.querySelector('.recomended');
const recomendedSpan = document.querySelector('.recomended-span');

let cont = 0;

function gerarNumeroAleatorio() {
	return Math.floor(Math.random() * 10);
}

function gerarNumeroAleatorio2a4() {
	return Math.floor(Math.random() * 3) + 2;
}

function putContent() {
	cont = 1;
	buttonMines.textContent = 'Gerando...';
	imageDefault.src = `../imagens/gpt.gif`;
	setInterval(function () {
		if (cont) {
			buttonMines.textContent = 'GERAR ENTRADA';
			recomended.style.display = 'flex';
			imageDefault.src = `../imagens/mines/sinais/${gerarNumeroAleatorio()}.png`;
			recomendedSpan.textContent = gerarNumeroAleatorio2a4();
			cont = 0;
		}
	}, 2200);
}

buttonMines.addEventListener('click', putContent);
