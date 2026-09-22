# VRJB END’R — Ecossistema Digital

Site institucional, técnico, educacional e comercial da **VRJB END’R — Ensaios Não Destrutivos Reconstrutivos**.

O produto foi construído ao redor da jornada:

**Inspecionar → Detectar → Diagnosticar → Planejar → Reconstruir → Validar → Monitorar**

## Estado da versão

- Protótipo navegável e responsivo.
- Publicação privada por padrão.
- Conteúdo em português brasileiro.
- Home narrativa e rotas modulares para métodos, problemas, ativos e setores.
- Formulário local que gera um briefing copiável sem transmitir dados.
- Módulos de equipamentos, cases e certificações marcados como **Conteúdo a validar**.
- Cenários, equipamentos e métricas usados para demonstrar a interface aparecem como **exemplo ilustrativo** e nunca como prova operacional.
- Nenhum cliente, certificação, equipe, localização ou resultado operacional foi apresentado como fato sem validação.

## Stack

- Next.js/Vinext + TypeScript.
- React 19.
- CSS com tokens centralizados em `app/globals.css`.
- Componentes acessíveis do catálogo instalado para Sheet, Accordion, Select, Input e Button.
- Imagens industriais em WebP otimizado, com identificação visual de conteúdo ilustrativo.
- Saída compatível com Cloudflare Workers/Sites.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

O projeto também pode ser executado sem instalar o `pnpm` globalmente:

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
pnpm dev
```

Crie um arquivo `.env.local` a partir de `.env.example` e substitua os contatos antes do go-live:

```bash
cp .env.example .env.local
```

Build de produção:

```bash
pnpm build
```

## Estrutura principal

```text
app/
  page.tsx               Home e schema Organization
  [...path]/page.tsx     Rotas modulares, metadata e breadcrumbs
  globals.css            Design System e responsividade
  sitemap.ts             Sitemap gerado
  robots.ts              Robots
components/
  vrjb-site.tsx          Experiência, componentes e formulário
  vrjb/
    technical-visuals.tsx HUD, monitoramento, métricas e portfólio
lib/
  site-data.ts           Conteúdo estruturado e taxonomia
public/assets/
  vrjb-pipeline-scan.webp
  inspections/           Galeria industrial ilustrativa em WebP
```

## Rotas prioritárias

- `/` — Home.
- `/endr` — metodologia central.
- `/solucoes`, `/end`, `/problemas`, `/ativos`, `/setores` — hubs.
- `/end/[slug]` — 14 páginas de método/plataforma de aquisição, incluindo UT, PAUT, TOFD, ECT, AE, RT, IRIS, termografia, videoscopia e drones.
- `/problemas/corrosao`, `/problemas/trincas`, `/problemas/soldas` — páginas de problema.
- `/solicitar-diagnostico` — gerador de briefing.
- `/cases`, `/equipamentos`, `/certificacoes`, `/qualidade` — evidência pendente.

## Documentação

- `PHASE_0_1_AUDIT.md`
- `BRAND_SYSTEM.md`
- `DESIGN_SYSTEM.md`
- `SEO_ARCHITECTURE.md`
- `CONTENT_MODEL.md`
- `MOTION_SYSTEM.md`
- `COMPONENTS.md`
- `ACCESSIBILITY.md`
- `PERFORMANCE.md`
- `DEPLOY.md`
- `IMPLEMENTATION_SUMMARY.md`

## Regra de verdade

Antes de publicar conteúdo operacional, registrar origem, responsável, data, escopo e evidência. Se faltar confirmação, usar `Conteúdo a validar` ou manter o módulo fora da comunicação pública.
