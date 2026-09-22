# Content Model

## Entidades

### Método

`slug`, `nome`, `sigla`, `princípio`, `como_funciona`, `aplicações`, `materiais`, `vantagens`, `limitações`, `ativos`, `setores`, `segurança`, `normas`, `equipamentos`, `faq`, `relacionados`, `status_validacao`.

### Problema

`slug`, `nome`, `sintomas`, `causas_possiveis`, `dados_iniciais`, `ativos`, `métodos_possiveis`, `limitações`, `próximo_passo`, `status_validacao`.

### Ativo

`slug`, `nome`, `geometrias`, `materiais`, `regiões`, `problemas`, `métodos`, `restrições`, `setores`.

### Setor

`slug`, `nome`, `contexto_operacional`, `ativos`, `problemas`, `restrições`, `provas`, `status_validacao`.

### Case

`problema`, `ativo`, `condição`, `método`, `dados`, `diagnóstico`, `intervenção`, `validação`, `resultado`, `autorização`, `evidências`.

### Equipamento

`fabricante`, `modelo`, `princípio`, `aplicação`, `faixa`, `limitações`, `acessórios`, `calibração`, `status`, `proprietário_da_evidência`.

## Status de validação

- `draft` — rascunho interno.
- `technical_review` — revisão técnica.
- `evidence_required` — falta documento/prova.
- `approved` — apto a publicar.
- `expired` — validade vencida.

## Livro-razão de afirmações

Toda claim de escala, desempenho, cliente, qualificação ou resultado deve registrar texto da afirmação, fonte, responsável, data, escopo, validade e autorização de publicação.

## Formulário

O protótipo gera briefing local. Integração futura deve registrar consentimento, política de retenção, origem UTM, anexos em armazenamento seguro e status do lead.
