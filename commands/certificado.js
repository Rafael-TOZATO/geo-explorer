function gerarCertificado(nomeUsuario, trilha) {
    const dataAtual = new Date().toLocaleDateString('pt-BR');

    const mensagem = [
        "==================================================",
        "             CERTIFICADO DE CONCLUSÃO              ",
        "==================================================",
        ` Certificamos que: ${nomeUsuario}`,
        ` Concluiu com êxito a trilha de: ${trilha}`,
        ` Emitido em: ${dataAtual}`,
        " Projeto: Geo-Explorer | Apoio: IBM Bob",
        "=================================================="
    ].join('\n');

    return { sucesso: true, nomeUsuario, trilha, dataAtual, mensagem };
}

if (require.main === module) {
    const args = process.argv.slice(2);
    const usuario = args[0] || 'Estudante';
    const trilhaNome = args[1] || 'IBM Bob';
    const resultado = gerarCertificado(usuario, trilhaNome);
    console.log(resultado.mensagem);
}

module.exports = { gerarCertificado };
