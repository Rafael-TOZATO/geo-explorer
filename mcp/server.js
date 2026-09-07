const { McpServer } = require('@modelcontextprotocol/sdk/server/mcp.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { z } = require('zod');

const { buscarTrilha } = require('../commands/trilha');
const { executarDesafio } = require('../commands/desafio');
const { gerarCertificado } = require('../commands/certificado');

const server = new McpServer({
  name: 'geo-explorer',
  version: '1.0.0'
});

server.tool(
  'trilha',
  'Consulta uma trilha de aprendizagem pelo id (ex: ibm-bob, n8n, power-bi) e retorna nome, descricao e niveis disponiveis.',
  { idTrilha: z.string().describe('Identificador da trilha, ex: "ibm-bob"') },
  async ({ idTrilha }) => {
    const trilha = buscarTrilha(idTrilha);

    if (!trilha) {
      return {
        content: [{ type: 'text', text: `Trilha com ID "${idTrilha}" não encontrada.` }],
        isError: true
      };
    }

    const texto = `Trilha: ${trilha.nome}\nDescrição: ${trilha.descricao}\nNíveis Disponíveis: ${trilha.niveis.join(', ')}`;
    return { content: [{ type: 'text', text: texto }] };
  }
);

server.tool(
  'desafio',
  'Gera um desafio de codigo para uma trilha e nivel informados.',
  {
    idTrilha: z.string().describe('Identificador da trilha, ex: "power-bi"'),
    nivel: z.string().describe('Nivel do desafio: Iniciante, Intermediário ou Avançado')
  },
  async ({ idTrilha, nivel }) => {
    const resultado = executarDesafio(idTrilha, nivel);
    return {
      content: [{ type: 'text', text: resultado.mensagem }],
      isError: !resultado.sucesso
    };
  }
);

server.tool(
  'certificado',
  'Gera um certificado ficticio de conclusao de uma trilha para um usuario.',
  {
    nomeUsuario: z.string().describe('Nome da pessoa a ser certificada'),
    trilha: z.string().describe('Nome da trilha concluida')
  },
  async ({ nomeUsuario, trilha }) => {
    const resultado = gerarCertificado(nomeUsuario, trilha);
    return { content: [{ type: 'text', text: resultado.mensagem }] };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Erro ao iniciar o servidor MCP:', error);
    process.exit(1);
  });
}

module.exports = { server };
