<<<<<<< HEAD
// Desafio: Lógica para sorteio de Amigo Secreto
let listaDeAmigos = []; // Array para armazenar os nomes dos amigos

// Função para exibir texto em elementos HTML
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Exibe mensagem inicial na página
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto (by MJB)');
}

exibirMensagemInicial();

// Adiciona um novo amigo à lista
function adicionarAmigo() {
    const amigoNovoElemento = document.getElementById('amigo');
    const amigoNovoConteudo = amigoNovoElemento.value.trim();
    const listaAmigosElemento = document.getElementById('listaAmigos');

    if (amigoNovoConteudo === '') {
        alert('Nome do amigo não pode ficar em branco');
        return;
    }

    if (listaDeAmigos.includes(amigoNovoConteudo)) {
        alert('Este nome de amigo já foi adicionado!');
        return;
    }

    listaDeAmigos.push(amigoNovoConteudo);

    // Limpa a lista na tela e a atualiza com os nomes da listaDeAmigos
    listaAmigosElemento.innerHTML = '';
    listaDeAmigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElemento.appendChild(itemLista);
    });

    amigoNovoElemento.value = ''; // Limpa o campo de entrada
}

// Sorteia um amigo da lista
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    const resultadoElemento = document.getElementById('resultado');

    // Exibe o resultado do sorteio na tela
    resultadoElemento.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
=======
// Desafio: Lógica para sorteio de Amigo Secreto
let listaDeAmigos = []; // Array para armazenar os nomes dos amigos

// Função para exibir texto em elementos HTML
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Exibe mensagem inicial na página
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto (by MJB)');
}

exibirMensagemInicial();

// Adiciona um novo amigo à lista
function adicionarAmigo() {
    const amigoNovoElemento = document.getElementById('amigo');
    const amigoNovoConteudo = amigoNovoElemento.value.trim();
    const listaAmigosElemento = document.getElementById('listaAmigos');

    if (amigoNovoConteudo === '') {
        alert('Nome do amigo não pode ficar em branco');
        return;
    }

    if (listaDeAmigos.includes(amigoNovoConteudo)) {
        alert('Este nome de amigo já foi adicionado!');
        return;
    }

    listaDeAmigos.push(amigoNovoConteudo);

    // Limpa a lista na tela e a atualiza com os nomes da listaDeAmigos
    listaAmigosElemento.innerHTML = '';
    listaDeAmigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElemento.appendChild(itemLista);
    });

    amigoNovoElemento.value = ''; // Limpa o campo de entrada
}

// Sorteia um amigo da lista
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    const resultadoElemento = document.getElementById('resultado');

    // Exibe o resultado do sorteio na tela
    resultadoElemento.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
>>>>>>> ca6e392546c1755a6daf7f1a06e6f1550e8915ac
