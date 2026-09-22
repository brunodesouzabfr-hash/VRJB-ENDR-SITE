# Design System Mestre

## Princípios

1. Cor comunica estado; não decora.
2. Grid organiza; não compete com o texto.
3. Motion explica transição; não ocupa atenção permanente.
4. 3D precisa demonstrar ativo, sinal ou intervenção.
5. Toda prova operacional precisa de fonte.

## Tokens

Tokens vivem em `app/globals.css` e cobrem cores VRJB, espaçamento, raios mínimos, tipografia, durações de motion, superfícies, bordas e foco.

## Grid técnico

- Canvas máximo: 1440 px.
- Margem desktop: 32 px; mobile: 14 px.
- Grid de fundo: 48 px.
- Cards: 4 colunas desktop, 2 tablet, 1 mobile.
- Linhas com baixa opacidade e recortes verticais para ritmo de prancha.

## Backgrounds

| ID | Uso | Implementação |
| --- | --- | --- |
| BG-01 Technical Grid | hero/rotas | CSS linear gradients |
| BG-02 Sonar | detecção | círculos + sweep CSS |
| BG-03 Wave Field | método/dados | reservado para canvas futuro |
| BG-04 Blueprint | arquitetura | grid + linhas estruturais |
| BG-05 Point Cloud | imagem hero | raster gerado e otimizado |
| BG-06 Wireframe | scan | raster + componente leve |
| BG-07 Noise | profundidade | dispensado nesta fase para preservar nitidez |

## Estados

- Padrão: borda petróleo/steel.
- Hover: deslocamento de -3 px, linha ciano ou laranja.
- Focus: 2 px ciano, offset 4 px.
- Pendente: contorno laranja + rótulo “Conteúdo a validar”.
- Desabilitado: baixo contraste, sem aparência clicável.

## Responsividade

- Hero mantém texto primeiro e oculta sonar auxiliar em tablet/mobile.
- CTA persistente apenas no mobile.
- Cards passam de 4 → 2 → 1 coluna.
- Timeline passa de linha para lista vertical.
- Formulário e resultado ficam lado a lado no desktop e empilhados no mobile.

## Acessibilidade

- Corpo em 16 px ou mais.
- Touch targets de 44 px.
- Estado não depende apenas de cor.
- Motion reduzido por preferência do sistema.
- Elementos decorativos sem semântica.

## Do / Don’t

### Do

- Mostrar limitações.
- Usar laranja para ação e anomalia.
- Manter o hero legível mesmo sem animação.
- Escrever microcopy específica.

### Don’t

- Inventar dashboards, coordenadas ou percentuais.
- Usar hexágonos como linguagem dominante.
- Aplicar glow em todos os componentes.
- Transformar cada bloco em card arredondado.
- Carregar vídeo ou WebGL para explicar uma mensagem simples.
