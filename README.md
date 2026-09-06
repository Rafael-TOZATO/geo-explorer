# Geo-Explorer

> **Autor:** Rafael Ornelas Tozato  
> **Instituição:** Centro Universitário Unifatecie (Engenharia Química | 2024-2029)  
> **Governança Técnica:** `branch protection active` (Rulesets ativos com bloqueio de *force push* e exclusão)  

---

## Sobre o Projeto

O **Geo-Explorer** é uma aplicação interativa desenvolvida com o suporte do **IBM Bob**, projetada para gerenciar e explorar trilhas de aprendizagem. A proposta central é permitir que a pessoa usuária consulte um plano de estudos por tecnologia, receba um desafio de código parametrizado pelo nível informado e gere um certificado fictício de conclusão.

---

## O Que o Projeto Contém

O repositório foi estruturado de forma modular para garantir alta manutenibilidade e clareza arquitetural:

```text
geo-explorer/
├── data/          # Base de dados estruturada com trilhas fictícias, tecnologias e níveis
├── commands/      # Implementação dos comandos principais (Trilha, Desafio, Certificado)
├── mcp/           # Servidor MCP para integração com ferramentas externas e agentes
├── tests/         # Testes automatizados para validação da lógica de negócio
└── README.md      # Documentação institucional e técnica do projeto
