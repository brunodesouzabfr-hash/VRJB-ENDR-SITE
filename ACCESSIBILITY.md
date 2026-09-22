# Acessibilidade — WCAG 2.2 AA

## Implementado

- HTML semântico e idioma `pt-BR`.
- Skip link para conteúdo.
- Navegação por teclado.
- Foco visível ciano.
- Labels explícitos em formulário.
- Alt descritivo no hero.
- Ícones acompanhados de texto nas ações principais.
- Touch targets de 44 px ou mais.
- Contraste elevado em texto e CTAs.
- `prefers-reduced-motion`.
- Menu mobile e accordion baseados em componentes acessíveis.
- Mensagem de resultado com `aria-live`.

## QA executado

- Sem imagens sem `alt`.
- Sem botões vazios.
- Sem IDs duplicados.
- Sem overflow horizontal no viewport desktop validado.
- Rotas e títulos principais renderizados.

## Antes de lançamento público

1. Auditar com axe/Lighthouse no domínio final.
2. Testar NVDA, VoiceOver e TalkBack.
3. Testar zoom a 200%.
4. Revisar contraste após logo e fonte finais.
5. Validar mensagens de erro do backend do formulário.
6. Garantir alternativa textual para qualquer 3D futuro.
