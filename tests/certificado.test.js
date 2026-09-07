const { gerarCertificado } = require('../commands/certificado');

describe('comando certificado', () => {

  test('gera certificado com nome e trilha informados', () => {
    const resultado = gerarCertificado('Rafael Tozato', 'Power BI');

    expect(resultado.sucesso).toBe(true);
    expect(resultado.nomeUsuario).toBe('Rafael Tozato');
    expect(resultado.trilha).toBe('Power BI');
    expect(resultado.mensagem).toContain('CERTIFICADO DE CONCLUSÃO');
    expect(resultado.mensagem).toContain('Rafael Tozato');
    expect(resultado.mensagem).toContain('Power BI');
  });

  test('inclui a data de emissao no formato pt-BR', () => {
    const resultado = gerarCertificado('Estudante', 'IBM Bob');

    expect(resultado.dataAtual).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });
});
