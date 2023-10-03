const iframeTiger = document.querySelector('#iframe-tiger');
const iframeRabbit = document.querySelector('#iframe-rabbit');
const iframeOx = document.querySelector('#iframe-ox');
const iframeMouse = document.querySelector('#iframe-mouse');
const iframeMines = document.querySelector('#iframe-mines');
const iframeAviator = document.querySelector('#iframe-aviator');
const iframeSpaceman = document.querySelector('#iframe-spaceman');
const aviatorAnchor = document.querySelector('#aviatorAnchor');
const aviatorImage = document.querySelector('#aviatorAnchor img');
const bonusButton = document.querySelector('#bonnusButton');

// FunÃ§Ã£o para ler o arquivo "configuracao.txt"
function lerArquivo(callback) {
	const arquivo = './configuracao.txt';
	const xhr = new XMLHttpRequest();
	xhr.open('GET', arquivo, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				const conteudo = xhr.responseText;
				callback(conteudo);
			}
		}
	};
	xhr.send();
}

// FunÃ§Ã£o para converter o conteÃºdo do arquivo em um objeto
function converterParaObjeto(conteudo) {
	const campos = conteudo.trim().split(';');
	const configuracoes = {};

	campos.forEach((campo) => {
		const posicaoPrimeiroIgual = campo.indexOf(':');
		if (posicaoPrimeiroIgual !== -1) {
			const chave = campo.slice(0, posicaoPrimeiroIgual);
			const valor = campo.slice(posicaoPrimeiroIgual + 1);
			configuracoes[chave] = valor || null;
		}
	});

	return configuracoes;
}

function setarSource(iframe, link, general) {
	try {
		iframe.src = link || general;
	} catch (error) {}
}

function manipularConfiguracoes(configuracoes) {
	if (configuracoes.whatsapp !== null) {
		try {
			aviatorAnchor.href = configuracoes.whatsapp;
			aviatorImage.src = 'imagens/banners/whatsapp.jpg';
		} catch (error) {}
	}
	if (configuracoes.telegram !== null) {
		try {
			aviatorAnchor.href = configuracoes.telegram;
			aviatorImage.src = 'imagens/banners/telegram.jpg';
		} catch (error) {}
	}
	try {
		bonusButton.href = configuracoes.general;
	} catch (error) {}
	setarSource(bonusButton, configuracoes.general, configuracoes.general);
	setarSource(iframeTiger, configuracoes.Tiger, configuracoes.general);
	setarSource(iframeRabbit, configuracoes.Rabbit, configuracoes.general);
	setarSource(iframeOx, configuracoes.Ox, configuracoes.general);
	setarSource(iframeMouse, configuracoes.Mouse, configuracoes.general);
	setarSource(iframeMines, configuracoes.Mines, configuracoes.general);
	setarSource(iframeAviator, configuracoes.Aviator, configuracoes.general);
	setarSource(iframeSpaceman, configuracoes.Spaceman, configuracoes.general);
}

lerArquivo(function (conteudo) {
	const configuracoes = converterParaObjeto(conteudo);
	manipularConfiguracoes(configuracoes);
});