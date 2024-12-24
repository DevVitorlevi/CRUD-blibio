// Obtém o elemento do formulário pelo ID 'form'
const form = document.getElementById('form');

// Obtém todos os elementos com a classe 'required'
const input = document.querySelectorAll('.required');

// Obtém todos os elementos com a classe 'span-required' (para mensagens de erro)
const required = document.querySelectorAll('.span-required');

// Obtém o ano atual usando a classe Date
const date = new Date();
const Year = date.getFullYear(); // Armazena o ano atual


// Adiciona um listener para eventos de tecla pressionada
document.addEventListener('keydown', evt => {
    if (evt.key == 'Enter') {
        impedirEnvio(evt); // Impede o envio do formulário ao pressionar Enter
    }
});

// Adiciona um listener para o evento 'submit' no formulário
form.addEventListener('submit', impedirEnvio);

// Função para impedir o envio do formulário
function impedirEnvio(ev) {
    const erros = [ValidarTitulo(), ValidarAutor(), ValidarAno()];
    if (erros.includes(false)) {
        ev.preventDefault(); // Só impede se houver erros
    }
}

// Adiciona listeners para eventos de entrada em cada campo 'required'
input[0].addEventListener('input', ValidarTitulo); // Título
input[1].addEventListener('input', ValidarAutor);  // Autor
input[2].addEventListener('input', ValidarAno);    // Ano

// Função para exibir o erro em um campo
function CasoError(i) {
    input[i].style.border = '2px solid #e63636'; // Define uma borda vermelha
    required[i].style.display = 'block'; // Exibe a mensagem de erro
}

// Função para remover o erro de um campo
function Noterror(i) {
    input[i].style.border = ''; // Remove a borda vermelha
    required[i].style.display = 'none'; // Oculta a mensagem de erro
}

// Função para validar o campo de título
function ValidarTitulo() {
    if (input[0].value.length === 0) { // Verifica se o título está vazio
        CasoError(0); // Aplica estilo de erro ao campo de título
    } else {
        Noterror(0); // Remove o estilo de erro
    }
}

// Função para validar o campo de autor
function ValidarAutor() {
    if (input[1].value.length === 0) { // Verifica se o autor está vazio
        CasoError(1); // Aplica estilo de erro ao campo de autor
    } else {
        Noterror(1); // Remove o estilo de erro
    }
}

// Função para validar o campo de ano
function ValidarAno() {
    if (input[2].value.length === 0 || input[2].value > Year) {
        // Verifica se o ano está vazio ou é maior que o ano atual
        CasoError(2); // Aplica estilo de erro ao campo de ano
    } else {
        Noterror(2); // Remove o estilo de erro
    }
}
