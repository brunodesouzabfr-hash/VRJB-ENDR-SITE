# Fases 0–1 — Auditoria Visual e Brand Foundation

## Diagnóstico dos anexos

### Forças recorrentes

- Base escura petróleo/navy com alta percepção de precisão.
- Ciano associado a radar, ultrassom, dados e wireframe.
- Laranja associado a alerta, anomalia e ação.
- Grids, marcações, escalas e coordenadas como linguagem de engenharia.
- Protagonismo de tubulações, refinarias e seções escaneadas.
- Tipografia condensada/stencil com presença industrial.
- Composição assimétrica e cinematográfica.

### Riscos encontrados

- Números, coordenadas, profundidades, anos e percentuais conceituais podem parecer prova real.
- A proporção indicada em alguns mockups era 60/30/20, totalizando 110%.
- Excesso de HUD, glow ou pequenos dados aproximaria a marca de videogame/cyberpunk.
- Logo e fontes presentes nas imagens não são ativos jurídicos ou tipográficos finais.
- Um 3D pesado no primeiro carregamento prejudicaria LCP, mobile e acessibilidade.

### Decisões aplicadas

- Formalização da proporção **60/30/10**.
- Ciano = inspeção/dados; laranja = intervenção; petróleo = integridade.
- Hero raster otimizado em vez de Three.js obrigatório no primeiro carregamento.
- Sonar, scan e fluxo como componentes leves de interface.
- Marca textual temporária e favicon funcional; SVG oficial poderá substituir ambos.
- Dados conceituais identificados como não operacionais.

## Tese visual

> Laboratório técnico + planta industrial + interface de inspeção + engenharia premium.

Não é cyberpunk. Não é dashboard fictício. A imersão existe para explicar o processo.

## Wireframe textual da Home

1. Navegação fixa e CTA técnico.
2. Hero: posicionamento + pipeline escaneado + sonar conceitual.
3. Entradas por problema, ativo, método e solução.
4. Problemas.
5. Processo END’R.
6. Semântica visual e scan.
7. Métodos END.
8. Ativos.
9. Setores.
10. Tecnologia e arquitetura futura.
11. Evidência pendente.
12. FAQ.
13. CTA e footer.

## Plano 3D

### Agora

- Imagem hero CGI otimizada.
- Scanline, sonar e orbits em CSS.
- Diagrama de tubulação em interface leve.

### Futuro

- Digital twin simplificado carregado sob demanda.
- Modelo 3D apenas em devices compatíveis.
- Fallback estático obrigatório.
- Interação limitada a rotação, corte e hotspots úteis.

## Riscos de performance

| Risco | Mitigação aplicada |
| --- | --- |
| Hero pesado | WebP de ~166 KB, dimensões reservadas e prioridade controlada |
| Muitos efeitos | CSS transform/opacity e `prefers-reduced-motion` |
| JS de 3D | Não incluído nesta fase |
| Fontes externas | Não bloqueiam o protótipo; arquivo final deve ser local/subset |
| Conteúdo extenso | Rotas modulares e carregamento por navegação |

## Roadmap

1. Validar nome, logo, slogan, fonte e canais oficiais.
2. Validar escopo real de serviços e setores prioritários.
3. Inserir equipe, equipamentos, qualificações e documentos comprovados.
4. Produzir 3–5 cases autorizados.
5. Conectar formulário a CRM/e-mail com LGPD.
6. Adicionar biblioteca editorial e revisão técnica.
7. Implementar portal do cliente, relatórios e certificados quando houver backend.
8. Avaliar 3D progressivo após medição de performance real.
