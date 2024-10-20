  /* Arrays que armazenam diferentes partes da mensagem */

  // Saudações iniciais
const saudacoes = ["Olá", "Ei", "Bom dia", "Oi", "Saudações"];

  // Frases motivacionais para inspirar o usuário
const motivacoes = [
    "Você é capaz de tudo!",
    "Acredite nos seus sonhos!",
    "Hoje é o seu dia!",
    "Não desista agora!",
    "Você é incrível!"
];

  // Conselhos práticos e simples
const conselhos = [
    "Tente algo novo hoje.",
    "Cuide de você mesmo.",
    "Seja grato pelas pequenas coisas.",
    "Sorria, mesmo quando for difícil.",
    "Aprecie o momento presente."
];

  /* Função que gera uma nova mensagem aleatória */
function gerarMensagem() {
    // Seleciona uma saudação aleatória
    const saudacaoAleatoria = saudacoes[Math.floor(Math.random() * saudacoes.length)];
    
    // Seleciona uma frase motivacional aleatoriamente
    const motivacaoAleatoria = motivacoes[Math.floor(Math.random() * motivacoes.length)];
    
    // Seleciona um conselho aleatório
    const conselhoAleatorio = conselhos[Math.floor(Math.random() * conselhos.length)];

    // Combina a saudação, a frase motivacional e o conselho
    const mensagem = `${saudacaoAleatoria}! ${motivacaoAleatoria} ${conselhoAleatorio}`;
    
    // Exibe a mensagem no elemento HTML com o ID 'mensagem'
    document.getElementById('mensagem').innerText = mensagem;
}