# Motion System

## Princípios

- Movimento indica aquisição, detecção, direção ou mudança de estado.
- Animações longas nunca bloqueiam leitura.
- O conteúdo é compreensível com motion desativado.
- Transform e opacity são preferidos para desempenho.

## Durações

- Fast: 180 ms — hover, focus e microfeedback.
- Normal: 450–700 ms — entrada de conteúdo.
- Slow: 1.2 s — transições atmosféricas.
- Sonar: 4.2 s — loop contínuo suave.
- Intro: 1.85 s e apenas uma vez por sessão.

## Componentes

- `IntroSequence`: grid → radar → marca → site.
- `SonarRadar`: sweep circular e targets discretos.
- `hero-scanline`: leitura horizontal lenta.
- `pipe-scan`: varredura funcional da tubulação.
- `card-scan`: feedback no hover.
- `status-pulse`: estado conceitual de leitura.

## Reduced motion

Em `prefers-reduced-motion: reduce`, a intro é removida, loops são reduzidos, scroll suave é desligado e o conteúdo permanece visível.

## Regras futuras para 3D

- Não iniciar automaticamente em hardware limitado.
- Pausar fora da viewport.
- Limitar DPR.
- Carregar modelo depois do conteúdo crítico.
- Manter fallback estático equivalente.
