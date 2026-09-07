const { buscarTrilha } = require('./trilha');

function executarDesafio(idTrilha, nivelDesejado) {
    const trilha = buscarTrilha(idTrilha);

    if (!trilha) {
        return { sucesso: false, mensagem: `Trilha com ID "${idTrilha}" não encontrada.` };
    }

    const nivelValido = trilha.niveis.find(n => n.toLowerCase() === nivelDesejado.toLowerCase());

    if (!nivelValido) {
        const mensagem = `Nível "${nivelDesejado}" inválido para a trilha ${trilha.nome}.\nNíveis disponíveis: ${trilha.niveis.join(', ')}`;
        return { sucesso: false, mensagem };
    }

    const mensagem = `=== Desafio Prático: ${trilha.nome} (${nivelValido}) ===\nDesenvolva uma solução prática aplicando os conceitos fundamentais de ${trilha.nome} no nível ${nivelValido}.`;
    return { sucesso: true, trilha, nivel: nivelValido, mensagem };
}

if (require.main === module) {
    const args = process.argv.slice(2);
    const id = args[0] || 'ibm-bob';
    const nivel = args[1] || 'Iniciante';
    const resultado = executarDesafio(id, nivel);
    console.log(resultado.mensagem);
}

module.exports = { executarDesafio };
