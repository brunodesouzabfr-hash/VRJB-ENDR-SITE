# Performance

## Metas

- LCP ≤ 2,5 s.
- INP ≤ 200 ms.
- CLS ≤ 0,1.

## Estratégia atual

- Hero convertido para WebP (~166 KB).
- Dimensões reservadas pelo componente de imagem.
- Sem vídeo de fundo.
- Sem Three.js no carregamento inicial.
- Motion em CSS com transform/opacity.
- Conteúdo por rota.
- Ícones vetoriais do pacote já instalado.
- Nenhuma fonte remota bloqueante.

## Orçamento recomendado

| Recurso | Meta |
| --- | --- |
| Hero | < 250 KB |
| JS inicial | < 220 KB gzip, revisar após instrumentação |
| Fontes | até 2 famílias + mono subset |
| 3D futuro | lazy, < 1,5 MB comprimido |
| CLS | nenhuma mídia sem dimensões |

## Medição

Executar Lighthouse mobile e WebPageTest no domínio final. Registrar LCP element, long tasks, cache, compressão Brotli e distribuição geográfica.

## Gates para 3D

Adicionar WebGL somente se o componente explicar uma decisão real, houver fallback equivalente, LCP não depender do bundle 3D, hardware limitado puder desativar e a medição comprovar impacto aceitável.
