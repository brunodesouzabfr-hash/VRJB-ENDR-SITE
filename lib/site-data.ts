import {
  Activity,
  Building2,
  CircleDot,
  Droplets,
  Factory,
  Gauge,
  Layers3,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type CardItem = {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
  icon: LucideIcon;
};

export const primaryNav = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Métodos", href: "/end" },
  { label: "Setores", href: "/setores" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "END’R", href: "/endr" },
  { label: "Conhecimento", href: "/conteudo" },
  { label: "Sobre", href: "/sobre" },
];

export const problems: CardItem[] = [
  {
    title: "Corrosão e perda de espessura",
    description:
      "Estruture a inspeção para localizar, medir e acompanhar a evolução da perda de material.",
    href: "/problemas/corrosao",
    eyebrow: "Condição",
    icon: CircleDot,
  },
  {
    title: "Trincas e descontinuidades",
    description:
      "Relacione material, geometria, acesso e criticidade antes de selecionar o método.",
    href: "/problemas/trincas",
    eyebrow: "Integridade",
    icon: Activity,
  },
  {
    title: "Soldas e juntas críticas",
    description:
      "Organize a verificação de fabricação, montagem, reparo e validação pós-intervenção.",
    href: "/problemas/soldas",
    eyebrow: "Uniões",
    icon: ScanLine,
  },
  {
    title: "Vazamentos e infiltrações",
    description:
      "Qualifique o sintoma, o ativo e as condições operacionais para orientar o diagnóstico.",
    href: "/problemas/vazamentos",
    eyebrow: "Estanqueidade",
    icon: Droplets,
  },
];

export const methods: CardItem[] = [
  {
    title: "Ultrassom",
    description:
      "Ondas ultrassônicas aplicadas à detecção e caracterização de descontinuidades.",
    href: "/end/ultrassom",
    eyebrow: "UT",
    icon: Waves,
  },
  {
    title: "Medição de espessura",
    description:
      "Leituras pontuais ou mapeamentos para avaliar perda de material e tendências.",
    href: "/end/medicao-de-espessura",
    eyebrow: "UTM",
    icon: Gauge,
  },
  {
    title: "Phased Array",
    description:
      "Varredura eletrônica com múltiplos elementos para inspeções de maior cobertura.",
    href: "/end/phased-array-paut",
    eyebrow: "PAUT",
    icon: ScanLine,
  },
  {
    title: "TOFD",
    description:
      "Técnica baseada no tempo de voo da difração, frequentemente aplicada a soldas.",
    href: "/end/tofd",
    eyebrow: "TOFD",
    icon: Activity,
  },
  {
    title: "Líquido penetrante",
    description:
      "Indicação de descontinuidades abertas à superfície em materiais não porosos.",
    href: "/end/liquido-penetrante",
    eyebrow: "LP",
    icon: Droplets,
  },
  {
    title: "Partículas magnéticas",
    description:
      "Detecção de descontinuidades superficiais e próximas à superfície em ferromagnéticos.",
    href: "/end/particulas-magneticas",
    eyebrow: "PM",
    icon: Sparkles,
  },
];

export const assets: CardItem[] = [
  {
    title: "Tubulações e linhas",
    description: "Trechos retos, curvas, soldas, suportes, conexões e regiões de transição.",
    href: "/ativos/tubulacoes",
    icon: Waves,
  },
  {
    title: "Tanques e vasos",
    description: "Costado, fundo, teto, bocais, juntas e regiões de concentração de tensões.",
    href: "/ativos/tanques-e-vasos",
    icon: Layers3,
  },
  {
    title: "Estruturas e concreto",
    description: "Componentes metálicos, elementos civis, acessos e interfaces construtivas.",
    href: "/ativos/estruturas",
    icon: Building2,
  },
  {
    title: "Equipamentos e acessos",
    description: "Flanges, tampas de inspeção, componentes e zonas de manutenção recorrente.",
    href: "/ativos/equipamentos",
    icon: Wrench,
  },
];

export const sectors: CardItem[] = [
  {
    title: "Petróleo e gás",
    description: "Integridade de ativos em ambientes de processo e operação contínua.",
    href: "/setores/petroleo-e-gas",
    icon: Factory,
  },
  {
    title: "Saneamento",
    description: "Linhas, canalizações, estruturas civis e ativos expostos à umidade.",
    href: "/setores/saneamento",
    icon: Droplets,
  },
  {
    title: "Energia e indústria",
    description: "Componentes críticos, manutenção planejada e suporte à decisão técnica.",
    href: "/setores/energia-e-industria",
    icon: Activity,
  },
  {
    title: "Infraestrutura",
    description: "Estruturas metálicas e civis, acessos, interfaces e elementos especiais.",
    href: "/setores/infraestrutura",
    icon: Building2,
  },
];

export const endrProcess = [
  { index: "01", title: "Inspecionar", copy: "Ler o ativo, o contexto e as restrições reais de campo.", tone: "cyan" },
  { index: "02", title: "Detectar", copy: "Localizar sinais e indicações que merecem investigação.", tone: "cyan" },
  { index: "03", title: "Diagnosticar", copy: "Transformar evidência técnica em entendimento da condição.", tone: "cyan" },
  { index: "04", title: "Planejar", copy: "Definir prioridades, escopo e sequência da intervenção.", tone: "neutral" },
  { index: "05", title: "Reconstruir", copy: "Executar recuperação, reparo ou substituição conforme o projeto validado.", tone: "orange" },
  { index: "06", title: "Validar", copy: "Aplicar END pós-intervenção e registrar a condição resultante.", tone: "orange" },
  { index: "07", title: "Monitorar", copy: "Acompanhar histórico, recorrência e integridade ao longo do tempo.", tone: "green" },
] as const;

export const pathways = [
  { label: "Tenho um problema", href: "/problemas", icon: CircleDot },
  { label: "Conheço o ativo", href: "/ativos", icon: Layers3 },
  { label: "Conheço o método", href: "/end", icon: Microscope },
  { label: "Quero planejar a solução", href: "/solucoes", icon: Wrench },
];

export type RouteContent = {
  eyebrow: string;
  title: string;
  intro: string;
  accent: string;
  sections: Array<{
    title: string;
    copy: string;
    bullets?: string[];
  }>;
  related?: Array<{ label: string; href: string }>;
  pending?: boolean;
};

export const routeContent: Record<string, RouteContent> = {
  solucoes: {
    eyebrow: "Soluções",
    title: "Da pergunta de campo à decisão de integridade.",
    intro:
      "A VRJB organiza o trabalho por problema, ativo, método, setor e resultado esperado. A escolha técnica final depende de informações reais do ativo e do escopo.",
    accent: "Arquitetura orientada ao problema",
    sections: [
      { title: "Ensaios Não Destrutivos", copy: "Métodos convencionais e avançados preparados como módulos independentes e combináveis.", bullets: ["Inspeção visual", "Ensaios de superfície", "Ultrassom", "Métodos avançados"] },
      { title: "Integridade", copy: "Leitura estruturada da condição, criticidade, histórico e restrições operacionais.", bullets: ["Mapeamento", "Caracterização", "Priorização", "Documentação"] },
      { title: "Reconstrução", copy: "Planejamento de recuperação, reparo, substituição e validação pós-intervenção.", bullets: ["Escopo reconstrutivo", "Compatibilização", "Execução", "END pós-reparo"] },
    ],
    related: [{ label: "Entender o processo END’R", href: "/endr" }, { label: "Solicitar diagnóstico", href: "/solicitar-diagnostico" }],
  },
  end: {
    eyebrow: "Métodos END",
    title: "O método certo começa pela pergunta certa.",
    intro:
      "Siglas não devem ser uma barreira. Explore por princípio físico e aplicação, mas valide a seleção com contexto de material, geometria, acesso, descontinuidade e objetivo.",
    accent: "Detectar · Medir · Caracterizar",
    sections: [
      { title: "Superfície", copy: "Recursos para identificar condições abertas à superfície ou próximas dela.", bullets: ["VT / EV", "Líquido penetrante", "Partículas magnéticas"] },
      { title: "Volume e geometria", copy: "Recursos para investigar regiões internas, soldas e espessuras.", bullets: ["Ultrassom", "PAUT", "TOFD", "Radiografia"] },
      { title: "Condição e monitoramento", copy: "Recursos complementares para localização, tendência e acompanhamento.", bullets: ["Termografia", "ECT", "AE", "IRIS", "Videoscopia"] },
    ],
    related: methods.slice(0, 4).map((item) => ({ label: item.title, href: item.href })),
  },
  problemas: {
    eyebrow: "Entrada por problema",
    title: "Comece pelo que está acontecendo com o ativo.",
    intro:
      "O visitante não precisa conhecer a sigla do ensaio. A estrutura transforma sintomas e riscos percebidos em perguntas técnicas mais úteis.",
    accent: "Sintoma → contexto → método",
    sections: problems.map((item) => ({ title: item.title, copy: item.description })),
    related: problems.map((item) => ({ label: item.title, href: item.href })),
  },
  ativos: {
    eyebrow: "Entrada por ativo",
    title: "Geometria, material e acesso mudam a inspeção.",
    intro:
      "Cada ativo impõe condições específicas. Esta camada aproxima a linguagem do site da realidade de manutenção e operação.",
    accent: "Ativo antes da técnica",
    sections: assets.map((item) => ({ title: item.title, copy: item.description })),
    related: assets.map((item) => ({ label: item.title, href: item.href })),
  },
  setores: {
    eyebrow: "Setores",
    title: "Uma mesma indicação tem impactos diferentes em cada operação.",
    intro:
      "As páginas setoriais contextualizam ativos, restrições, segurança e continuidade operacional sem presumir experiência que ainda não foi documentada.",
    accent: "Contexto operacional",
    sections: sectors.map((item) => ({ title: item.title, copy: item.description })),
    related: sectors.map((item) => ({ label: item.title, href: item.href })),
  },
  tecnologia: {
    eyebrow: "Tecnologia",
    title: "Tecnologia aplicada ao sinal, não ao espetáculo.",
    intro:
      "O sistema digital foi desenhado para explicar aquisição, leitura, registro e rastreabilidade. Equipamentos reais serão publicados somente após validação interna.",
    accent: "Scan · dados · rastreabilidade",
    sections: [
      { title: "Aquisição", copy: "Representar como dados são obtidos e associados ao ativo, à área e à condição de inspeção." },
      { title: "Interpretação", copy: "Organizar sinais, limitações e critérios sem transformar visualização conceitual em laudo." },
      { title: "Histórico", copy: "Preparar a base futura para relatórios, certificados, imagens e evolução da integridade." },
      { title: "Equipamentos", copy: "Módulo reservado para inventário validado, com fabricante, modelo, aplicação e status.", bullets: ["Conteúdo a validar", "Não publicado como prova operacional"] },
    ],
    pending: true,
  },
  reconstrucao: {
    eyebrow: "Reconstrução",
    title: "A inspeção orienta. A intervenção transforma.",
    intro:
      "O “R” posiciona a marca no ciclo completo: entender a condição, planejar o escopo, intervir e verificar o resultado.",
    accent: "Do diagnóstico à reconstrução",
    sections: [
      { title: "Planejar", copy: "Consolidar condição, prioridades, interfaces, restrições e sequência executiva." },
      { title: "Intervir", copy: "Recuperar, reparar, substituir ou reconstruir conforme solução tecnicamente definida." },
      { title: "Validar", copy: "Registrar a condição pós-intervenção com o método aplicável e documentação rastreável." },
    ],
    related: [{ label: "Ver processo END’R", href: "/endr" }, { label: "Qualificar uma demanda", href: "/solicitar-diagnostico" }],
  },
  qualidade: {
    eyebrow: "Qualidade",
    title: "Autoridade será demonstrada por evidência.",
    intro:
      "Esta área foi preparada para publicar procedimentos, qualificações, rastreabilidade e critérios de controle após validação documental.",
    accent: "Prova antes da promessa",
    sections: [
      { title: "Procedimentos", copy: "Estrutura prevista para documentos, revisões, escopo e controle de aplicação." },
      { title: "Qualificações", copy: "Publicação somente com responsável, validade, escopo e documento verificável." },
      { title: "Rastreabilidade", copy: "Vínculo entre ativo, inspeção, dado, decisão, intervenção e validação." },
    ],
    pending: true,
  },
  certificacoes: {
    eyebrow: "Certificações",
    title: "Espaço reservado para credenciais confirmadas.",
    intro:
      "Nenhuma certificação, acreditação ou vínculo institucional foi presumido. O módulo está pronto para receber documentos reais.",
    accent: "Conteúdo a validar",
    sections: [
      { title: "Critério de publicação", copy: "Entidade emissora, titular, escopo, número, validade e documento de comprovação." },
      { title: "O que não será feito", copy: "Logotipos, selos, normas ou associações não serão exibidos sem autorização e evidência." },
    ],
    pending: true,
  },
  equipamentos: {
    eyebrow: "Equipamentos",
    title: "Inventário técnico preparado. Dados reais pendentes.",
    intro:
      "A página futura poderá organizar os equipamentos por princípio, aplicação, faixa, resolução e documentação de calibração.",
    accent: "Conteúdo a validar",
    sections: [
      { title: "Ficha padrão", copy: "Fabricante, modelo, princípio, aplicação, limitações, acessórios e status documental." },
      { title: "Regra de verdade", copy: "Nenhuma imagem conceitual será apresentada como equipamento pertencente à VRJB." },
    ],
    pending: true,
  },
  cases: {
    eyebrow: "Cases",
    title: "O template está pronto. A evidência ainda precisa chegar.",
    intro:
      "Cases serão publicados somente com autorização, contexto suficiente e separação clara entre dados do cliente e síntese educativa.",
    accent: "Problema → método → intervenção → validação",
    sections: [
      { title: "Estrutura do case", copy: "Problema, ativo, condição, método, dados, diagnóstico, intervenção, validação e resultado." },
      { title: "Privacidade e prova", copy: "Anonimização quando necessária, autorização de uso e fonte de cada afirmação." },
    ],
    pending: true,
  },
  sobre: {
    eyebrow: "Sobre a VRJB END’R",
    title: "Uma marca construída ao redor do ciclo completo da integridade.",
    intro:
      "VRJB END’R é a identidade em desenvolvimento para Ensaios Não Destrutivos Reconstrutivos. O sistema evita inventar escala e concentra a narrativa no método de trabalho.",
    accent: "Precisão · engenharia · reconstrução",
    sections: [
      { title: "Propósito", copy: "Transformar sinais de inspeção em decisões que orientem intervenções reais." },
      { title: "Princípio", copy: "Separar claramente dado, interpretação, recomendação, execução e validação." },
      { title: "Compromisso", copy: "Comunicar somente experiência, equipe, equipamentos e credenciais que possam ser comprovados." },
    ],
  },
  conteudo: {
    eyebrow: "Conteúdo técnico",
    title: "Conhecimento para escolher melhor, não para decorar siglas.",
    intro:
      "A biblioteca foi estruturada em clusters de métodos, problemas, ativos, setores, equipamentos e normas. Os artigos serão publicados com revisão e data.",
    accent: "SEO com utilidade técnica",
    sections: [
      { title: "Guias de métodos", copy: "Princípio, aplicação, materiais, vantagens, limitações e métodos complementares." },
      { title: "Guias de problemas", copy: "Como descrever sintomas, quais dados reunir e como evitar seleção prematura do método." },
      { title: "Guias de decisão", copy: "Escopo, acesso, parada, segurança, documentação e validação pós-intervenção." },
    ],
    pending: true,
  },
};

export const methodDetails: Record<string, RouteContent> = {
  "ultrassom": {
    eyebrow: "Método END · UT",
    title: "Ultrassom: ondas que ajudam a compreender o interior do material.",
    intro: "O ensaio utiliza ondas ultrassônicas e a resposta do sinal para investigar espessura, interfaces e possíveis descontinuidades. A técnica e o procedimento dependem do material, geometria, acesso e objetivo.",
    accent: "Princípio físico: propagação e reflexão",
    sections: [
      { title: "Como funciona", copy: "Um transdutor introduz energia ultrassônica no material. Tempos de percurso, amplitudes e padrões de resposta são analisados conforme o procedimento aplicável." },
      { title: "Aplicações", copy: "Medição de espessura, avaliação de soldas e investigação de regiões internas, entre outras aplicações qualificadas.", bullets: ["Tubulações", "Tanques e vasos", "Soldas", "Componentes metálicos"] },
      { title: "Limitações", copy: "Condição superficial, geometria, acoplamento, orientação da descontinuidade, material e acesso podem alterar a resposta e a cobertura." },
      { title: "Segurança e qualidade", copy: "A seleção do procedimento, calibração, qualificação e interpretação devem seguir os requisitos técnicos aplicáveis ao escopo." },
    ],
    related: [{ label: "Medição de espessura", href: "/end/medicao-de-espessura" }, { label: "Phased Array", href: "/end/phased-array-paut" }, { label: "Solicitar diagnóstico", href: "/solicitar-diagnostico" }],
  },
  "medicao-de-espessura": {
    eyebrow: "Método END · UTM",
    title: "Medição de espessura para quantificar perda de material.",
    intro: "Leituras isoladas ou organizadas em malha podem apoiar a avaliação da condição e o acompanhamento de tendências, desde que método, pontos e referência sejam controlados.",
    accent: "Medir · mapear · comparar",
    sections: [
      { title: "O que responde", copy: "Ajuda a estimar espessura remanescente nos pontos acessíveis e definidos pelo plano de inspeção." },
      { title: "Planejamento", copy: "Material, revestimento, temperatura, geometria, histórico e distribuição dos pontos influenciam o resultado." },
      { title: "Limitações", copy: "Uma leitura pontual não representa automaticamente todo o ativo; cobertura e interpretação precisam ser compatíveis com o risco." },
    ],
    related: [{ label: "Corrosão", href: "/problemas/corrosao" }, { label: "Ultrassom", href: "/end/ultrassom" }],
  },
  "phased-array-paut": {
    eyebrow: "Método END · PAUT",
    title: "Phased Array: varredura eletrônica com cobertura planejada.",
    intro: "Múltiplos elementos controlados eletronicamente permitem configurar feixes e registrar visualizações úteis para aplicações qualificadas.",
    accent: "Cobertura · focalização · registro",
    sections: [
      { title: "Como funciona", copy: "A defasagem dos elementos controla ângulo e foco do feixe conforme a lei focal e o procedimento." },
      { title: "Aplicações", copy: "Frequentemente considerado em inspeção de soldas, mapeamentos e geometrias específicas quando a aplicação é adequada." },
      { title: "Limitações", copy: "Acesso, geometria, configuração, bloco de referência, competência do operador e critérios de aceitação são determinantes." },
    ],
    related: [{ label: "TOFD", href: "/end/tofd" }, { label: "Ultrassom", href: "/end/ultrassom" }],
  },
  "tofd": {
    eyebrow: "Método END · TOFD",
    title: "TOFD: leitura baseada no tempo de voo da difração.",
    intro: "O método utiliza sinais difratados nas extremidades de descontinuidades e costuma ser combinado a outras técnicas conforme o objetivo da inspeção.",
    accent: "Difração · dimensionamento · complementaridade",
    sections: [
      { title: "Aplicação típica", copy: "Avaliação volumétrica de soldas com configuração e procedimento adequados à geometria." },
      { title: "Vantagens", copy: "Registro de dados e potencial de dimensionamento quando os requisitos técnicos são atendidos." },
      { title: "Limitações", copy: "Zonas próximas às superfícies, geometria, cobertura e interpretação exigem planejamento e, em alguns casos, métodos complementares." },
    ],
    related: [{ label: "Phased Array", href: "/end/phased-array-paut" }, { label: "Soldas", href: "/problemas/soldas" }],
  },
  "liquido-penetrante": {
    eyebrow: "Método END · LP",
    title: "Líquido penetrante para descontinuidades abertas à superfície.",
    intro: "O processo utiliza um penetrante, remoção controlada do excesso e revelação das indicações em superfícies adequadas.",
    accent: "Superfície · limpeza · indicação",
    sections: [
      { title: "Aplicações", copy: "Materiais não porosos e superfícies com condição compatível com o procedimento." },
      { title: "Pontos críticos", copy: "Preparação, tempo de penetração, remoção, revelação, iluminação e avaliação." },
      { title: "Limitações", copy: "Detecta descontinuidades abertas à superfície e é sensível à limpeza e à condição do acabamento." },
    ],
    related: [{ label: "Partículas magnéticas", href: "/end/particulas-magneticas" }, { label: "Trincas", href: "/problemas/trincas" }],
  },
  "particulas-magneticas": {
    eyebrow: "Método END · PM",
    title: "Partículas magnéticas para materiais ferromagnéticos.",
    intro: "A magnetização do componente e a aplicação de partículas ajudam a revelar campos de fuga associados a descontinuidades superficiais e próximas à superfície.",
    accent: "Magnetização · orientação · indicação",
    sections: [
      { title: "Aplicações", copy: "Componentes ferromagnéticos, soldas e regiões acessíveis conforme o procedimento." },
      { title: "Pontos críticos", copy: "Direção do campo, condição superficial, iluminação, intensidade e desmagnetização quando aplicável." },
      { title: "Limitações", copy: "Restrito a materiais ferromagnéticos e dependente da orientação relativa entre campo e descontinuidade." },
    ],
    related: [{ label: "Líquido penetrante", href: "/end/liquido-penetrante" }, { label: "Trincas", href: "/problemas/trincas" }],
  },
};

export const problemDetails: Record<string, RouteContent> = {
  corrosao: {
    eyebrow: "Problema · Corrosão",
    title: "Corrosão não é apenas uma mancha. É uma condição a localizar e quantificar.",
    intro: "Morfologia, material, ambiente, revestimento, histórico e acesso orientam o plano de inspeção. O objetivo é transformar suspeita em informação útil para decidir.",
    accent: "Localizar · medir · acompanhar",
    sections: [
      { title: "Dados iniciais", copy: "Ativo, material, fluido, temperatura, região afetada, histórico e registros disponíveis." },
      { title: "Perguntas técnicas", copy: "A perda é localizada ou distribuída? Interna ou externa? Há revestimento? Existe tendência histórica?" },
      { title: "Métodos possíveis", copy: "Inspeção visual, medição de espessura, mapeamento ultrassônico e técnicas complementares — sempre conforme aplicabilidade." },
      { title: "Próximo passo", copy: "Consolidar o briefing do ativo para definir cobertura, preparação, acesso e documentação esperada." },
    ],
    related: [{ label: "Medição de espessura", href: "/end/medicao-de-espessura" }, { label: "Solicitar diagnóstico", href: "/solicitar-diagnostico" }],
  },
  trincas: {
    eyebrow: "Problema · Trincas",
    title: "Nem toda indicação superficial tem a mesma origem ou criticidade.",
    intro: "Material, orientação, localização, carregamento e condição superficial ajudam a definir quais métodos podem contribuir para a caracterização.",
    accent: "Indicação · orientação · contexto",
    sections: [
      { title: "Na superfície", copy: "VT, LP ou PM podem ser considerados conforme o material e a condição da região." },
      { title: "Em volume", copy: "Métodos ultrassônicos ou radiográficos podem integrar o plano conforme geometria e objetivo." },
      { title: "Após intervenção", copy: "A verificação pós-reparo deve ser prevista no escopo, não tratada como etapa opcional tardia." },
    ],
    related: [{ label: "Líquido penetrante", href: "/end/liquido-penetrante" }, { label: "Partículas magnéticas", href: "/end/particulas-magneticas" }],
  },
  soldas: {
    eyebrow: "Problema · Soldas",
    title: "A junta precisa ser entendida antes de ser examinada.",
    intro: "Processo de fabricação, material, espessura, geometria, acesso, condição superficial e critérios aplicáveis moldam o plano de inspeção.",
    accent: "Junta · cobertura · aceitação",
    sections: [
      { title: "Superfície", copy: "VT, LP e PM podem apoiar a avaliação de condições superficiais conforme aplicabilidade." },
      { title: "Volume", copy: "UT, PAUT, TOFD ou RT podem ser considerados conforme objetivo, material e geometria." },
      { title: "Documentação", copy: "Procedimento, calibração, registro, mapa de indicações e critérios precisam estar conectados." },
    ],
    related: [{ label: "Phased Array", href: "/end/phased-array-paut" }, { label: "TOFD", href: "/end/tofd" }],
  },
  vazamentos: {
    eyebrow: "Problema · Vazamentos",
    title: "O sintoma é visível. A origem pode não ser.",
    intro: "Local, fluido, pressão, regime de operação, acessos, interferências e histórico ajudam a separar contenção imediata de diagnóstico da causa.",
    accent: "Conter · localizar · corrigir",
    sections: [
      { title: "Caracterização", copy: "Quando ocorre, em qual condição, com qual fluido e em que região aparente." },
      { title: "Localização", copy: "Inspeção visual, termografia, videoscopia e outros recursos podem ser combinados conforme o sistema." },
      { title: "Intervenção", copy: "Reparo, substituição ou reconstrução devem prever acesso, segurança e validação após execução." },
    ],
    related: [{ label: "Reconstrução", href: "/reconstrucao" }, { label: "Solicitar diagnóstico", href: "/solicitar-diagnostico" }],
  },
};

export const sectorDetails: Record<string, RouteContent> = {
  "petroleo-e-gas": {
    eyebrow: "Setor · Petróleo e gás",
    title: "Integridade em ambientes de processo exige contexto operacional.",
    intro: "Linhas, vasos, tanques, soldas e estruturas podem exigir combinações de métodos, planejamento de acesso e coordenação com segurança e operação.",
    accent: "Processo · continuidade · rastreabilidade",
    sections: [
      { title: "Ativos", copy: "Tubulações, tanques, vasos, flanges, estruturas e componentes de processo." },
      { title: "Condições", copy: "Corrosão, perda de espessura, soldas, vazamentos e descontinuidades." },
      { title: "Escopo", copy: "As capacidades efetivamente ofertadas ao setor serão publicadas após validação operacional e documental." },
    ],
    pending: true,
  },
  saneamento: {
    eyebrow: "Setor · Saneamento",
    title: "Linhas e estruturas precisam de leitura integrada.",
    intro: "Canalizações, conexões, reservatórios, estruturas civis e acessos podem combinar sintomas hidráulicos, perda de material e degradação construtiva.",
    accent: "Fluxo · contenção · recuperação",
    sections: [
      { title: "Ativos", copy: "Tubulações, reservatórios, canalizações, tampas e estruturas civis." },
      { title: "Condições", copy: "Vazamentos, corrosão, infiltração, trincas e deterioração de acessos." },
      { title: "Jornada END’R", copy: "Localizar, diagnosticar, planejar acesso, intervir, validar e documentar." },
    ],
  },
  "energia-e-industria": {
    eyebrow: "Setor · Energia e indústria",
    title: "Decisões de manutenção dependem de dados claros e escopo executável.",
    intro: "A arquitetura prevê inspeções planejadas, janelas de parada e documentação compatível com o ciclo de manutenção.",
    accent: "Disponibilidade · risco · decisão",
    sections: [
      { title: "Planejamento", copy: "Ativo, criticidade, acesso, segurança, parada e entregáveis definidos antes do campo." },
      { title: "Integração", copy: "Dados de inspeção conectados à recomendação e ao plano de intervenção." },
      { title: "Validação", copy: "Verificação pós-serviço e histórico preparados para acompanhamento." },
    ],
    pending: true,
  },
  infraestrutura: {
    eyebrow: "Setor · Infraestrutura",
    title: "Estruturas civis e metálicas pedem diagnóstico antes do reparo.",
    intro: "Trincas, infiltrações, corrosão, acessos e interfaces construtivas precisam ser avaliados dentro do sistema em que ocorrem.",
    accent: "Estrutura · acesso · durabilidade",
    sections: [
      { title: "Componentes", copy: "Concreto, aço, juntas, apoios, acessos, tampas e elementos de ligação." },
      { title: "Leitura", copy: "Documentação visual, mapeamento, ensaios aplicáveis e correlação com histórico." },
      { title: "Reconstrução", copy: "Solução definida por projeto, compatibilidade, preparação, execução e validação." },
    ],
  },
};

export const assetDetails: Record<string, RouteContent> = {
  tubulacoes: {
    eyebrow: "Ativo · Tubulações",
    title: "Tubulações exigem leitura de sistema, não apenas de um ponto.",
    intro: "Material, diâmetro, espessura, fluido, temperatura, revestimento, soldas, curvas, suportes e acessos orientam cobertura e método.",
    accent: "Linha · geometria · condição",
    sections: [
      { title: "Regiões", copy: "Trechos retos, curvas, derivações, soldas, flanges, suportes e pontos de drenagem." },
      { title: "Problemas", copy: "Corrosão, erosão, perda de espessura, trincas, vazamentos e danos localizados." },
      { title: "Resultado", copy: "Mapa de condição, indicações, limitações, recomendações e pontos para acompanhamento." },
    ],
  },
  "tanques-e-vasos": {
    eyebrow: "Ativo · Tanques e vasos",
    title: "Cobertura e acesso precisam refletir a geometria do ativo.",
    intro: "Fundo, costado, teto, bocais, juntas e regiões de concentração de tensões podem demandar abordagens distintas.",
    accent: "Cobertura · criticidade · histórico",
    sections: [
      { title: "Escopo", copy: "Delimitar regiões, condição operacional, acesso e documentação necessária." },
      { title: "Métodos", copy: "Combinações de inspeção visual, espessura, superfície e volume conforme aplicabilidade." },
      { title: "Intervenção", copy: "O diagnóstico deve sustentar priorização, planejamento e validação do serviço executado." },
    ],
  },
  estruturas: {
    eyebrow: "Ativo · Estruturas",
    title: "A condição local precisa ser conectada ao comportamento da estrutura.",
    intro: "Material, carregamento, ambiente, ligações, revestimentos e histórico ajudam a qualificar indicações e intervenções.",
    accent: "Sistema · ligação · durabilidade",
    sections: [
      { title: "Metálicas", copy: "Perfis, chapas, soldas, parafusos, apoios, corrosão e deformações." },
      { title: "Civis", copy: "Concreto, fissuras, infiltração, cobrimento, interfaces e regiões reparadas." },
      { title: "Reconstrução", copy: "Preparação, solução compatível, sequência executiva e verificação pós-serviço." },
    ],
  },
  equipamentos: {
    eyebrow: "Ativo · Equipamentos",
    title: "Componentes, tampas e acessos também fazem parte da integridade.",
    intro: "Flanges, bocais, tampas de inspeção, carcaças e acessórios exigem leitura de função, vedação, acesso e condição de montagem.",
    accent: "Componente · interface · acesso",
    sections: [
      { title: "Condição", copy: "Corrosão, trincas, perda de material, deformação, vedação e deterioração do acesso." },
      { title: "Planejamento", copy: "Isolamento, desmontagem, segurança, compatibilidade e documentação." },
      { title: "Validação", copy: "Inspeção visual e métodos aplicáveis após reparo, substituição ou reconstrução." },
    ],
  },
};

export function contentForPath(path: string[]): RouteContent | undefined {
  if (path[0] === "end" && path[1]) return methodDetails[path[1]];
  if (path[0] === "problemas" && path[1]) return problemDetails[path[1]];
  if (path[0] === "setores" && path[1]) return sectorDetails[path[1]];
  if (path[0] === "ativos" && path[1]) return assetDetails[path[1]];
  return routeContent[path[0]];
}

export const routeIndex = [
  "/",
  "/solucoes",
  "/end",
  ...Object.keys(methodDetails).map((slug) => `/end/${slug}`),
  "/problemas",
  ...Object.keys(problemDetails).map((slug) => `/problemas/${slug}`),
  "/ativos",
  ...Object.keys(assetDetails).map((slug) => `/ativos/${slug}`),
  "/setores",
  ...Object.keys(sectorDetails).map((slug) => `/setores/${slug}`),
  "/endr",
  "/reconstrucao",
  "/tecnologia",
  "/equipamentos",
  "/cases",
  "/qualidade",
  "/certificacoes",
  "/sobre",
  "/conteudo",
  "/faq",
  "/contato",
  "/solicitar-diagnostico",
];

export const footerLinks = [
  { label: "Problemas", href: "/problemas" },
  { label: "Ativos", href: "/ativos" },
  { label: "Métodos END", href: "/end" },
  { label: "Processo END’R", href: "/endr" },
  { label: "Qualidade", href: "/qualidade" },
  { label: "Certificações", href: "/certificacoes" },
  { label: "Equipamentos", href: "/equipamentos" },
  { label: "Cases", href: "/cases" },
];

export const principleCards = [
  { icon: ScanLine, tag: "Sinal", title: "Ciano detecta", copy: "Inspeção, leitura, aquisição e dados." },
  { icon: Wrench, tag: "Intervenção", title: "Laranja transforma", copy: "Anomalia, decisão, reparo e reconstrução." },
  { icon: ShieldCheck, tag: "Integridade", title: "Petróleo sustenta", copy: "Estrutura, estabilidade, operação e continuidade." },
];

