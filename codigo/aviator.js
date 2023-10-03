const buttonAviator = document.querySelector('.button-aviator');
const buttonAviatorSpan = document.querySelector('.button-aviator #spanButton');
const labelTop = document.querySelector('.sinal');
const jogadas = document.querySelector('.jogadas .value');
const saida = document.querySelector('.saida .value');
const valido = document.querySelector('.valido .value');

let lastValido = new Date(); // Armazenar o último horário válido

function gerarNumeroAleatorio() {
	let numeroAleatorio = Math.random();
	let numero;
	if (numeroAleatorio < 0.5) {
		// 50% de chance para números de 1 a 2
		numero = (Math.random() + 1).toFixed(2);
	} else if (numeroAleatorio < 0.97) {
		// 47% de chance para números de 2 a 5
		numero = (Math.random() * 3 + 2).toFixed(2);
	} else {
		// 3% de chance para números de 10 a 57
		numero = (Math.random() * 47 + 10).toFixed(2);
	}
	return numero;
}

function gerarNumeroAleatorio2a4() {
	return Math.floor(Math.random() * 3) + 2;
}

function gerarHorarioAleatorio(minutos) {
	const agora = new Date();
	let minutosNovos = Math.floor(Math.random() * 3) + 1 + minutos;
	const horarioAleatorio = new Date(agora.getTime() + minutosNovos * 60000);

	if (horarioAleatorio <= lastValido) {
		minutosNovos += Math.floor(Math.random() * 3) + 1;
		horarioAleatorio.setTime(agora.getTime() + minutosNovos * 60000);
	}

	lastValido = horarioAleatorio;
	const hora = horarioAleatorio.getHours();
	minutosNovos = horarioAleatorio.getMinutes();
	minutosNovos = minutosNovos < 10 ? '0' + minutosNovos : minutosNovos;
	return hora + ':' + minutosNovos;
}

function putContent() {
	cont = 1;
	buttonAviatorSpan.textContent = 'Aguarde...';
	labelTop.textContent = 'Gerando sinal';
	setInterval(function () {
		if (cont) {
			const jogadasValue = gerarNumeroAleatorio2a4();
			jogadas.textContent = jogadasValue;
			saida.textContent = `${gerarNumeroAleatorio()}x`;
			valido.textContent = gerarHorarioAleatorio(jogadasValue);
			buttonAviatorSpan.textContent = 'Gerar novo em:';
			cont = 0;
		}
	}, 2200);
}

buttonAviator.addEventListener('click', putContent);

const countdownElement = document.getElementById('countdown');
const timerButton = document.getElementById('timerButton');
let timer = 60;
let interval;

function startTimer() {
	timer = 60;
	interval = setInterval(function () {
		if (timer > 0) {
			countdownElement.textContent = timer;
			timer--;
		} else {
			clearInterval(interval);
			buttonAviatorSpan.textContent = 'IDENTIFICAR SINAL';
			countdownElement.textContent = '';
			timerButton.style.pointerEvents = 'auto'; // Liberar botão
			buttonAviator.style.cursor = 'auto';
			buttonAviator.style.opacity = 1;
		}
	}, 1000);
}

timerButton.addEventListener('click', function () {
	timerButton.style.pointerEvents = 'none'; // Bloquear botão
	buttonAviator.style.cursor = 'not-allowed';
	buttonAviator.style.opacity = 0.65;
	countdownElement.textContent = timer;
	startTimer();
});
