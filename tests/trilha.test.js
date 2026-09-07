const { executarTrilha, buscarTrilha } = require('../commands/trilha');

describe('comando trilha', () => {

  test('buscarTrilha encontra uma trilha existente pelo id', () => {
    const trilha = buscarTrilha('ibm-bob');
    expect(trilha).not.toBeNull();
    expect(trilha.nome).toBe('IBM Bob');
  });

  test('buscarTrilha retorna null para um id inexistente', () => {
    const trilha = buscarTrilha('tecnologia-inexistente');
    expect(trilha).toBeNull();
  });

  test('executarTrilha retorna sucesso e dados da trilha quando o id existe', () => {
    const resultado = executarTrilha('n8n');

    expect(resultado.sucesso).toBe(true);
    expect(resultado.trilha.nome).toBe('N8N');
    expect(resultado.trilha.niveis).toContain('Iniciante');
  });

  test('executarTrilha retorna falha quando o id nao existe', () => {
    const resultado = executarTrilha('tecnologia-inexistente');

    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toContain('não encontrada');
  });
});
