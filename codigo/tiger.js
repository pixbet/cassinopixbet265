const button = document.querySelector('.floating-button');
const identificando = document.querySelector('.sending');
const containerResult = document.querySelector('.container-result');
const countdownElement = document.getElementById('countdown');

let secondsLeftIdentify = 3; // Tempo para identificar em segundos
let secondsLeftGame = 30; // Tempo para exibir o jogo em segundos
let interval;

function gerarNumeroAleatorio() {
	let numerosAleatorios = Math.floor(Math.random() * 3) + 3;
	let numerosAleatorios2 = Math.floor(Math.random() * 3) + 3;
	document.getElementById('times-to-play').innerText = numerosAleatorios;
	document.getElementById('times-to-play-turb').innerText = numerosAleatorios2;
}

function gerarHorarioAleatorio() {
	const agora = new Date();
	const minutosAleatorios = Math.floor(Math.random() * 3) + 1;
	const horarioAleatorio = new Date(
		agora.getTime() + minutosAleatorios * 60000,
	);
	const hora = horarioAleatorio.getHours();
	let minutos = horarioAleatorio.getMinutes();
	minutos = minutos < 10 ? '0' + minutos : minutos;
	const resultado = hora + ':' + minutos;
	document.getElementById('time-to-play').innerText = resultado;
}

function showGame() {
	containerResult.style.display = 'flex';
	identificando.style.display = 'none';
	resetButtonStateGame();
}

function showIdentifying() {
	containerResult.style.display = 'none';
	identificando.style.display = 'flex';
	resetButtonStateIdentify();
}

const startCountdownIdentify = () => {
	if (secondsLeftIdentify >= 0) {
		secondsLeftIdentify--;
	} else {
		clearInterval(interval);
		showGame();
		secondsLeftGame = 30; // Reset do tempo do jogo
		startCountdownGame();
	}
};

const startCountdownGame = () => {
	if (secondsLeftGame >= 0) {
		countdownElement.textContent = secondsLeftGame;
		secondsLeftGame--;
		setTimeout(startCountdownGame, 1000);
	} else {
		clearInterval(interval);
		countdownElement.textContent = '';
		resetButtonStateNormal();
		secondsLeftIdentify = 3;
	}
};
const resetButtonStateNormal = () => {
	button.style.opacity = '1';
	button.style.cursor = 'auto';
	button.style.pointerEvents = 'auto';
	button.classList.add('pulse');
};

const resetButtonStateIdentify = () => {
	button.style.opacity = '0.65';
	button.style.cursor = 'not-allowed';
	button.style.pointerEvents = 'none';
	button.classList.remove('pulse');
};

const resetButtonStateGame = () => {
	button.style.opacity = '0.65';
	button.style.cursor = 'not-allowed';
	button.style.pointerEvents = 'none';
	button.classList.remove('pulse');
};

const generatePatterns = () => {
	clearTimeout(interval);
	showIdentifying();
	gerarHorarioAleatorio();
	gerarNumeroAleatorio();
	interval = setInterval(startCountdownIdentify, 1000);
};

button.addEventListener('click', generatePatterns);
