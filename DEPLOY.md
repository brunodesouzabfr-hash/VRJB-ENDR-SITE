# Deploy e Operação

## Build

```bash
pnpm build
```

O projeto gera saída compatível com o runtime do Sites/Cloudflare Workers.

## Ambiente

- Nenhum segredo é necessário nesta versão.
- `.openai/hosting.json` armazena somente a identidade do projeto e bindings lógicos.
- Variáveis futuras devem ser configuradas no ambiente de hospedagem, nunca no repositório.

## Checklist de publicação

- Build concluído.
- Navegação e rotas críticas verificadas.
- Formulário testado sem transmissão.
- Metadata, sitemap e robots presentes.
- Nenhuma claim pendente publicada como fato.
- Acesso do site preservado conforme configuração atual.

## Para tornar comercial

1. Validar logo, nome e slogan.
2. Inserir contatos oficiais e política de privacidade.
3. Conectar envio do formulário/CRM.
4. Configurar consentimento, retenção e anexos conforme LGPD.
5. Revisar localização, NAP e Google Business.
6. Aprovar conteúdo técnico por responsável competente.
7. Publicar cases e credenciais somente com autorização.

## Portal futuro

O namespace `/client/` fica reservado para autenticação, projetos, inspeções, relatórios, certificados, downloads, fotos e histórico de ativos. Nenhum backend fictício foi incluído.
