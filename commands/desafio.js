const fs = require('fs');
const path = require('path');

function executarDesafio(idTrilha, nivelDesejado) {
    const filePath = path.join(__dirname, '../data/trilhas.json');
    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);

    const trilha = data.trilhas.find(t => t.id === idTrilha);

    if (!trilha) {
        console.log(`Trilha com ID "${idTrilha}" não encontrada.`);
        return;
    }

    const nivelValido = trilha.niveis.find(n => n.toLowerCase() === nivelDesejado.toLowerCase());

    if (!nivelValido) {
        console.log(`Nível "${nivelDesejado}" inválido para a trilha ${trilha.nome}.`);
        console.log(`Níveis disponíveis: ${trilha.niveis.join(', ')}`);
        return;
    }

    console.log(`=== Desafio Prático: ${trilha.nome} (${nivelValido}) ===`);
    console.log(`Desenvolva uma solução prática aplicando os conceitos fundamentais de ${trilha.nome} no nível ${nivelValido}.`);
}

const args = process.argv.slice(2);
const id = args[0] || 'ibm-bob';
const nivel = args[1] || 'Iniciante';
executarDesafio(id, nivel);
