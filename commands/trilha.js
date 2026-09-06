const fs = require('fs');
const path = require('path');

function executarTrilha(idTrilha) {
    const filePath = path.join(__dirname, '../data/trilhas.json');
    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);

    const trilha = data.trilhas.find(t => t.id === idTrilha);

    if (!trilha) {
        console.log(`Trilha com ID "${idTrilha}" não encontrada.`);
        return;
    }

    console.log(`=== Trilha: ${trilha.nome} ===`);
    console.log(`Descrição: ${trilha.descricao}`);
    console.log(`Níveis Disponíveis: ${trilha.niveis.join(', ')}`);
}

const args = process.argv.slice(2);
const id = args[0] || 'ibm-bob';
executarTrilha(id);
