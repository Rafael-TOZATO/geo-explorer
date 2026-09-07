const { executarDesafio } = require('../commands/desafio');

describe('comando desafio', () => {

  test('gera desafio quando a trilha e o nivel sao validos', () => {
    const resultado = executarDesafio('power-bi', 'Avançado');

    expect(resultado.sucesso).toBe(true);
    expect(resultado.nivel).toBe('Avançado');
    expect(resultado.mensagem).toContain('Power BI');
  });

  test('e case-insensitive na validacao do nivel', () => {
    const resultado = executarDesafio('ibm-bob', 'iniciante');

    expect(resultado.sucesso).toBe(true);
    expect(resultado.nivel).toBe('Iniciante');
  });

  test('retorna falha quando a trilha nao existe', () => {
    const resultado = executarDesafio('tecnologia-inexistente', 'Iniciante');

    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toContain('não encontrada');
  });

  test('retorna falha quando o nivel nao existe para a trilha', () => {
    const resultado = executarDesafio('ibm-bob', 'Especialista');

    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toContain('inválido');
  });
});
