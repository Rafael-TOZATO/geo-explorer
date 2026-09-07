const fs = require('fs');
const path = require('path');

function buscarTrilha(idTrilha) {
    const filePath = path.join(__dirname, '../data/trilhas.json');
    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);

    return data.trilhas.find(t => t.id === idTrilha) || null;
}

function executarTrilha(idTrilha) {
    const trilha = buscarTrilha(idTrilha);

    if (!trilha) {
        return { sucesso: false, mensagem: `Trilha com ID "${idTrilha}" não encontrada.` };
    }

    const mensagem = `=== Trilha: ${trilha.nome} ===\nDescrição: ${trilha.descricao}\nNíveis Disponíveis: ${trilha.niveis.join(', ')}`;
    return { sucesso: true, trilha, mensagem };
}

if (require.main === module) {
    const args = process.argv.slice(2);
    const id = args[0] || 'ibm-bob';
    const resultado = executarTrilha(id);
    console.log(resultado.mensagem);
}

module.exports = { executarTrilha, buscarTrilha };
