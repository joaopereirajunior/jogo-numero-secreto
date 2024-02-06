// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do número secreto'
let listaDeNumerosSorteados = [];
let numeroSecreto = geradorNumeroSecreto();
let tentativas = 1;

function verificarChute() {
    console.log(`numero sorteado é ${numeroSecreto}`);

    if (numeroSecreto == recuperarChute()) {

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h2', `Parabéns vc acertou com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        if (numeroSecreto > recuperarChute()) {
            exibirTextoNaTela('h2', 'Não foi dessa vez errooouuu');
            exibirTextoNaTela('h2', 'Número secreto é maior');
        } else {
            exibirTextoNaTela('h2', 'numero secreto é menor');
        }
        let chute = document.querySelector('input');
        chute.value = '';
    }
    tentativas++;

}

function reiniciarPagina() {
    numeroSecreto = geradorNumeroSecreto();
    document.getElementById('reiniciar').setAttribute('disabled', 'false');
    let chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do númeroSecreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');


function geradorNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        console.log('a lista contem o numero escolhido');
        return geradorNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log('Lista não contem numero escolhido e adicionou a lista');
        return numeroEscolhido;
       
    }
}

function recuperarChute() {
    let recuperarInput = document.querySelector('input').value;
    return recuperarInput;
}

