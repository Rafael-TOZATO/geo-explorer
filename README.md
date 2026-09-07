# Geo-Explorer

[![Branch Protection](https://img.shields.io/badge/branch%20protection-enabled-brightgreen.svg)](https://github.com/Rafael-TOZATO/geo-explorador/settings/rules)

> **Autor:** Rafael Ornelas Tozato  
> **Instituição:** Centro Universitário Unifatecie (Engenharia Química | 2024-2029)  
> **Governança Técnica:** `branch protection active` (Rulesets ativos com bloqueio de *force push* e exclusão)  
> **Desafio:** DIO — Bootcamp IBM Bob (Nível Empresarial para Desenvolvedores)

---

## Sobre o Projeto

O **Geo-Explorer** é uma aplicação interativa desenvolvida com o suporte do **IBM Bob**, projetada para gerenciar e explorar trilhas de aprendizagem. A proposta central é permitir que a pessoa usuária consulte um plano de estudos por tecnologia, receba um desafio de código parametrizado pelo nível informado e gere um certificado fictício de conclusão.

O projeto expõe essas três funcionalidades de duas formas: como **comandos de linha de comando (CLI)** e como **ferramentas de um servidor MCP**, permitindo que agentes de IA e outras ferramentas externas consultem trilhas, gerem desafios e emitam certificados de forma programática.

---

## O Que o Projeto Contém

```text
geo-explorer/
├── data/          # Base de dados estruturada com trilhas fictícias, tecnologias e níveis
├── commands/      # Implementação dos comandos principais (Trilha, Desafio, Certificado)
├── mcp/           # Servidor MCP para integração com ferramentas externas e agentes
├── tests/         # Testes automatizados (Jest) para validação da lógica de negócio
└── README.md      # Documentação institucional e técnica do projeto
```

---

## Como Executar o Projeto

```bash
git clone https://github.com/Rafael-TOZATO/geo-explorer.git
cd geo-explorer
npm install
```

---

## Como Usar os Comandos

### Trilha
Consulta uma trilha de aprendizagem pelo id.
```bash
npm run trilha ibm-bob
```

### Desafio
Gera um desafio de código para uma trilha e nível informados.
```bash
node commands/desafio.js power-bi Avançado
```

### Certificado
Gera um certificado fictício de conclusão.
```bash
node commands/certificado.js "Seu Nome" "N8N"
```

**Trilhas disponíveis:** `ibm-bob`, `n8n`, `power-bi`
**Níveis disponíveis:** `Iniciante`, `Intermediário`, `Avançado`

### Servidor MCP
Inicia o servidor MCP (protocolo stdio), expondo as três funcionalidades acima como ferramentas (`trilha`, `desafio`, `certificado`) para agentes e clientes MCP:
```bash
npm run mcp
```

---

## Como Executar os Testes

O projeto usa Jest para testes unitários da lógica de negócio dos três comandos:
```bash
npm test
```

---

## Melhorias Realizadas

Durante a revisão do projeto, foram identificados e corrigidos os seguintes pontos:

- **Correção de nomes de arquivo:** `data/trilhas. json` continha um espaço no nome e `commands/certificado.js.` tinha um ponto sobrando no final — ambos quebravam a execução dos comandos (`ENOENT` e `MODULE_NOT_FOUND`, respectivamente).
- **Refatoração para reuso:** a lógica de negócio de cada comando foi separada da impressão em tela (`console.log`), permitindo que a mesma função seja usada tanto pela CLI quanto pelo servidor MCP sem duplicação de código.
- **Servidor MCP implementado:** usando `@modelcontextprotocol/sdk`, expondo as três funcionalidades como ferramentas, testado ponta a ponta com um cliente MCP real.
- **Suite de testes automatizados:** 10 testes (Jest) cobrindo os cenários de sucesso e falha dos três comandos (trilha inexistente, nível inválido, validação case-insensitive, formatação de data).

---

## O Que Aprendi

Um dos maiores aprendizados foi perceber como um pequeno erro de nomenclatura de arquivo (um espaço, um ponto a mais) pode derrubar silenciosamente toda a aplicação sem indicar a causa real no primeiro olhar — reforça a importância de testar cada comando manualmente antes de considerar uma etapa concluída.

Trabalhar com o servidor MCP também trouxe um aprendizado técnico específico: como o protocolo usa `stdout` como canal de comunicação, qualquer `console.log` dentro da lógica de negócio corrompe as mensagens do servidor. Isso me levou a separar claramente a lógica de negócio (que apenas retorna dados) da camada de apresentação (que decide como exibir esses dados) — um princípio de design que passa a valer para os próximos projetos.

---

## Contato

- **E-mail:** [ornelas.tozato@gmail.com](mailto:ornelas.tozato@gmail.com)
- **LinkedIn:** [Rafael Ornelas Tozato](https://www.linkedin.com/in/rafaeltozato81)
- **Medium:** [Rafael Ornelas Tozato](https://medium.com/@ornelas.tozato)
- **GitHub:** [Rafael-TOZATO](https://github.com/Rafael-TOZATO)
