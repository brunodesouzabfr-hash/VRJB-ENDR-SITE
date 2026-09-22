import {
  Activity,
  Camera,
  Building2,
  CircleDot,
  Droplets,
  Eye,
  Factory,
  Gauge,
  Hammer,
  Layers3,
  Microscope,
  Mountain,
  Plane,
  Radio,
  ScanLine,
  ShieldCheck,
  Ship,
  Sparkles,
  Thermometer,
  Waves,
  Wrench,
  Zap,
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
    title: "Visual e Endoscópica",
    description:
      "Observação direta ou remota de superfícies, cavidades e regiões de acesso restrito.",
    href: "/end/vt-ev",
    eyebrow: "VT / EV",
    icon: Eye,
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
  {
    title: "Correntes Parasitas",
    description: "Indução eletromagnética para investigar materiais condutores e tubos de trocadores.",
    href: "/end/ect",
    eyebrow: "ECT",
    icon: Zap,
  },
  {
    title: "Emissão Acústica",
    description: "Monitoramento de ondas elásticas geradas por fontes ativas sob solicitação controlada.",
    href: "/end/ae",
    eyebrow: "AE",
    icon: Radio,
  },
  {
    title: "Radiografia Industrial",
    description: "Imagem de variações internas por radiação ionizante, com controle rigoroso de segurança.",
    href: "/end/rt",
    eyebrow: "RT",
    icon: ScanLine,
  },
  {
    title: "Termografia",
    description: "Mapeamento de padrões térmicos para triagem, comparação e investigação complementar.",
    href: "/end/termografia",
    eyebrow: "IR",
    icon: Thermometer,
  },
  {
    title: "IRIS",
    description: "Ultrassom rotativo interno para avaliação de tubos com preparação e acesso compatíveis.",
    href: "/end/iris",
    eyebrow: "IRIS",
    icon: Gauge,
  },
  {
    title: "Videoscopia",
    description: "Inspeção visual remota documentada em cavidades, tubulações e equipamentos.",
    href: "/end/videoscopia",
    eyebrow: "RVI",
    icon: Camera,
  },
  {
    title: "Inspeção com drones",
    description: "Plataforma de acesso e aquisição visual combinável com sensores e métodos aplicáveis.",
    href: "/end/drones",
    eyebrow: "UAS",
    icon: Plane,
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
  {
    title: "Mineração",
    description: "Estruturas, correias, silos, equipamentos e sistemas sujeitos a desgaste intenso.",
    href: "/setores/mineracao",
    icon: Mountain,
  },
  {
    title: "Construção civil",
    description: "Concreto, estruturas metálicas, fachadas e interfaces construtivas.",
    href: "/setores/construcao-civil",
    icon: Hammer,
  },
  {
    title: "Naval e Offshore",
    description: "Cascos, plataformas, linhas e estruturas em ambiente crítico e regulado.",
    href: "/setores/naval-offshore",
    icon: Ship,
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
    badge?: string;
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
      { title: "Detector ultrassônico", copy: "Ficha demonstrativa para organizar princípio, aplicação e estado documental.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Aplicação: espessura e ultrassom convencional", "Calibração: documento a validar"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Sistema Phased Array", copy: "Estrutura de apresentação para equipamento e configuração de varredura qualificada.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Cabeçotes e wedges: [a confirmar]", "Procedimento aplicável: [a confirmar]"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Câmera de inspeção remota", copy: "Modelo de ficha para videoscópio, óticas, iluminação e capacidade de registro.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Diâmetro da sonda: [a confirmar]", "Registro: imagem e vídeo"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Plataforma aérea não tripulada", copy: "Exemplo de estrutura para plataforma de acesso e aquisição, não caracterizada como ensaio isolado.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Carga útil/sensor: [a confirmar]", "Autorização operacional: a validar"], badge: "EXEMPLO — A VALIDAR" },
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
      { title: "PROC-END-001 — Ultrassom de espessura", copy: "Exemplo de estrutura documental: objetivo, campo de aplicação, responsabilidades, equipamento, calibração, execução, registro, critérios e revisão.", bullets: ["Código e revisão: modelo", "Responsável técnico: [a confirmar]", "Norma e critério: específicos do escopo", "Situação: não emitido / não vigente"], badge: "MODELO DE DOCUMENTO — NÃO VIGENTE" },
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
      { title: "Como avaliamos qualificação", copy: "A análise considera norma aplicável, entidade emissora, nível ou escopo, titularidade, validade e evidência documental. Referências como ABNT, ASME, API, ABENDI ou ASNT podem orientar requisitos, mas não representam certificação possuída pela VRJB." },
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
      { title: "Detector ultrassônico", copy: "Ficha de exemplo para aquisição A-scan e medição de espessura.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Nº de série: [a confirmar]", "Status de calibração: [a validar]"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Sistema PAUT", copy: "Ficha de exemplo para varredura eletrônica e registro codificado.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Sonda/wedge: [a confirmar]", "Software: [a confirmar]"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Câmera termográfica", copy: "Ficha de exemplo para levantamento de padrões térmicos.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Faixa térmica: [a confirmar]", "Resolução: [a confirmar]"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Videoscópio industrial", copy: "Ficha de exemplo para inspeção visual remota e registro de cavidades.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Sonda/ótica: [a confirmar]", "Nº de série: [a confirmar]"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Sistema de correntes parasitas", copy: "Ficha de exemplo para tubos e materiais condutores.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Sondas: [a confirmar]", "Padrões de referência: [a confirmar]"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Plataforma UAS", copy: "Ficha de exemplo para acesso visual remoto; não constitui ensaio por si só.", bullets: ["Fabricante: [a confirmar]", "Modelo: [a confirmar]", "Sensor/câmera: [a confirmar]", "Documentação operacional: [a validar]"], badge: "EXEMPLO — A VALIDAR" },
      { title: "Regra de verdade", copy: "As fichas e imagens demonstram o modelo editorial. Não afirmam que o equipamento pertence à VRJB até validação documental." },
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
      { title: "Cenário 01 — perda localizada em tubulação", copy: "Problema: suspeita de corrosão localizada. Método exemplificativo: inspeção visual e malha de espessura. Diagnóstico editorial: região a caracterizar. Intervenção possível: reparo ou substituição definidos por engenharia. Validação: repetição do método aplicável e registro comparativo.", badge: "CASE ILUSTRATIVO — NÃO DESCREVE CLIENTE REAL" },
      { title: "Cenário 02 — indicação em junta soldada", copy: "Problema: indicação superficial em solda. Método exemplificativo: VT e ensaio de superfície, com técnica volumétrica quando aplicável. Intervenção possível: preparação e reparo conforme projeto. Validação: END pós-intervenção e documentação.", badge: "CASE ILUSTRATIVO — NÃO DESCREVE CLIENTE REAL" },
      { title: "Privacidade e prova", copy: "Um case real exigirá autorização, fonte de cada afirmação, método, limitações, registro da intervenção e resultado verificável." },
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
      { title: "Como trabalhamos", copy: "Detectar, diagnosticar, planejar, reconstruir, validar e monitorar — um pipeline simplificado que transforma sinal em ação documentada." },
    ],
  },
  conteudo: {
    eyebrow: "Conteúdo técnico",
    title: "Conhecimento para escolher melhor, não para decorar siglas.",
    intro:
      "A biblioteca foi estruturada em clusters de métodos, problemas, ativos, setores, equipamentos e normas. Os artigos serão publicados com revisão e data.",
    accent: "SEO com utilidade técnica",
    sections: [
      { title: "Ultrassom industrial: o que o sinal pode — e não pode — responder", copy: "Cluster Método · princípio físico, calibração, geometria e limites de interpretação." },
      { title: "Como estruturar uma inspeção para corrosão e perda de espessura", copy: "Cluster Problema · dados mínimos, cobertura, malha e comparação histórica." },
      { title: "Inspeção de solda: superfície, volume e complementaridade", copy: "Cluster Ativo · critérios para combinar VT, LP, PM, UT, PAUT, TOFD ou RT." },
      { title: "Integridade de tubulações: do ponto medido ao sistema", copy: "Cluster Ativo · curvas, soldas, suportes, revestimentos e regiões críticas." },
      { title: "END na mineração: desgaste, acesso e continuidade", copy: "Cluster Setor · correias, silos, estruturas e equipamentos sujeitos a abrasão." },
      { title: "Detector ultrassônico: quais campos uma ficha técnica precisa ter", copy: "Cluster Equipamento · faixa, transdutor, calibração, registro e rastreabilidade." },
      { title: "Norma citada não é certificação: como verificar uma credencial", copy: "Cluster Norma · entidade, escopo, titularidade, validade e evidência." },
      { title: "END pós-reparo: por que validar antes de devolver o ativo", copy: "Cluster END’R · método aplicável, comparação, documentação e monitoramento." },
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
      { title: "Segurança e qualidade", copy: "Preparação superficial, calibração, acoplamento, identificação dos pontos, registro e critérios de avaliação devem ser definidos no procedimento." },
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
      { title: "Segurança e qualidade", copy: "Plano de varredura, leis focais, calibração, cobertura, sensibilidade, armazenamento dos dados e revisão técnica precisam ser rastreáveis." },
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
      { title: "Segurança e qualidade", copy: "Bloco de referência, PCS, sensibilidade, codificação, cobertura, verificação funcional e critérios aplicáveis devem integrar o procedimento." },
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
      { title: "Segurança e qualidade", copy: "Compatibilidade dos produtos, lote, validade, temperatura, iluminação, descarte e limpeza pós-ensaio precisam ser controlados." },
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
      { title: "Segurança e qualidade", copy: "Técnica de magnetização, intensidade e direção do campo, iluminação, consumíveis, desmagnetização e registro devem ser verificados." },
    ],
    related: [{ label: "Líquido penetrante", href: "/end/liquido-penetrante" }, { label: "Trincas", href: "/problemas/trincas" }],
  },
  "vt-ev": {
    eyebrow: "Método END · VT / EV",
    title: "Inspeção visual e endoscópica: observar com método antes de concluir.",
    intro: "A observação direta ou remota documenta superfícies, cavidades e regiões acessíveis. Iluminação, acesso, preparação, resolução e critério de avaliação condicionam o que pode ser identificado.",
    accent: "Acesso · iluminação · registro",
    sections: [
      { title: "Como funciona", copy: "A superfície é examinada diretamente ou por recursos ópticos, câmeras e sondas. A técnica registra condição, localização e dimensão aparente conforme procedimento." },
      { title: "Aplicações", copy: "Triagem de corrosão, deformações, condição de soldas, montagem, limpeza e inspeção interna de cavidades acessíveis.", bullets: ["Tubulações", "Vasos e tanques", "Soldas", "Cavidades e equipamentos"] },
      { title: "Limitações", copy: "O método depende de linha de visada, iluminação, limpeza, resolução e experiência. Não caracteriza automaticamente a profundidade ou extensão interna de uma indicação." },
      { title: "Segurança e qualidade", copy: "Acesso, energia isolada, iluminação, escala de referência, rastreabilidade das imagens e critérios aplicáveis precisam ser definidos." },
    ],
    related: [{ label: "Videoscopia", href: "/end/videoscopia" }, { label: "Líquido penetrante", href: "/end/liquido-penetrante" }],
  },
  ect: {
    eyebrow: "Método END · ECT",
    title: "Correntes parasitas para materiais condutores e geometrias qualificadas.",
    intro: "O ensaio mede alterações na resposta eletromagnética induzida. Material, condutividade, permeabilidade, frequência, geometria, revestimento e padrão de referência influenciam a interpretação.",
    accent: "Indução · impedância · comparação",
    sections: [
      { title: "Como funciona", copy: "Uma bobina excitada cria um campo alternado que induz correntes no material. Descontinuidades e variações de propriedade alteram amplitude e fase do sinal." },
      { title: "Aplicações", copy: "Tubos de trocadores, superfícies condutoras e componentes com aplicações específicas, utilizando sondas e frequências adequadas.", bullets: ["Trocadores de calor", "Tubos não ferromagnéticos", "Detecção superficial", "Triagem de condutividade"] },
      { title: "Limitações", copy: "Profundidade de penetração, efeito de borda, geometria, lift-off, material e ruído podem restringir sensibilidade e dimensionamento." },
      { title: "Segurança e qualidade", copy: "Sonda, padrão de referência, configuração, verificação funcional, técnica de varredura e competência de análise devem ser controlados." },
    ],
    related: [{ label: "IRIS", href: "/end/iris" }, { label: "Equipamentos", href: "/equipamentos" }],
  },
  ae: {
    eyebrow: "Método END · AE",
    title: "Emissão acústica para localizar fontes ativas durante solicitação controlada.",
    intro: "Sensores registram ondas elásticas geradas por fontes ativas no material. A técnica é global e depende de carregamento, ruído, acoplamento, geometria e critérios específicos.",
    accent: "Fonte ativa · localização · monitoramento",
    sections: [
      { title: "Como funciona", copy: "Sensores distribuídos captam eventos acústicos. Tempos de chegada, energia, amplitude e padrões são correlacionados para localizar e classificar atividade." },
      { title: "Aplicações", copy: "Monitoramento de estruturas e equipamentos durante prova, carregamento ou condição operacional planejada, conforme procedimento qualificado.", bullets: ["Tanques", "Vasos", "Estruturas", "Ensaios sob carga"] },
      { title: "Limitações", copy: "Fontes inativas podem não emitir; ruído mecânico e operacional interfere. O método indica atividade e costuma exigir verificação localizada complementar." },
      { title: "Segurança e qualidade", copy: "O plano precisa controlar carregamento, zonas de segurança, posicionamento, acoplamento, verificação do sistema e critérios de avaliação." },
    ],
    related: [{ label: "Ultrassom", href: "/end/ultrassom" }, { label: "Tanques e vasos", href: "/ativos/tanques-e-vasos" }],
  },
  rt: {
    eyebrow: "Método END · RT",
    title: "Radiografia industrial para registrar variações internas de espessura e densidade.",
    intro: "A radiação atravessa o componente e forma uma imagem em detector ou filme. Geometria, espessura, material, orientação da descontinuidade e técnica de exposição determinam a capacidade de avaliação.",
    accent: "Atenuação · imagem · segurança radiológica",
    sections: [
      { title: "Como funciona", copy: "Uma fonte de raios X ou gama e um detector são posicionados segundo técnica calculada. Diferenças de atenuação formam contrastes avaliáveis na imagem." },
      { title: "Aplicações", copy: "Soldas, fundidos e componentes com geometria compatível, quando o acesso, a segurança e o objetivo justificam a técnica.", bullets: ["Soldas", "Fundidos", "Perfis internos", "Registro permanente"] },
      { title: "Limitações", copy: "Exige controle de acesso e posicionamento; orientação e sobreposição podem ocultar indicações. Espessura e material afetam tempo e qualidade da imagem." },
      { title: "Segurança e qualidade", copy: "Somente operação autorizada, planejamento radiológico, isolamento de área, monitoramento, técnica e critérios aplicáveis. Nenhuma capacidade regulatória da VRJB é presumida nesta página." },
    ],
    related: [{ label: "Inspeção de soldas", href: "/problemas/soldas" }, { label: "TOFD", href: "/end/tofd" }],
    pending: true,
  },
  termografia: {
    eyebrow: "Método END · IR",
    title: "Termografia infravermelha para reconhecer padrões térmicos relevantes.",
    intro: "A câmera registra radiação infravermelha e a converte em mapa térmico. Emissividade, reflexão, distância, ambiente, carga e referência influenciam a leitura.",
    accent: "Temperatura aparente · padrão · tendência",
    sections: [
      { title: "Como funciona", copy: "O sensor compara a energia infravermelha recebida e produz uma distribuição de temperaturas aparentes, interpretada dentro das condições registradas." },
      { title: "Aplicações", copy: "Triagem elétrica, mecânica, isolamento, infiltração e processos, desde que haja contraste térmico e método compatível.", bullets: ["Painéis e conexões", "Equipamentos rotativos", "Isolamento", "Umidade e infiltração"] },
      { title: "Limitações", copy: "A imagem térmica não revela sozinha a causa. Superfícies refletivas, baixa diferença térmica, vento, distância e emissividade podem induzir erro." },
      { title: "Segurança e qualidade", copy: "Carga, ambiente, emissividade, distância, foco, faixa, referência e autorização de acesso devem ser registrados e controlados." },
    ],
    related: [{ label: "Vazamentos", href: "/problemas/vazamentos" }, { label: "Energia e indústria", href: "/setores/energia-e-industria" }],
  },
  iris: {
    eyebrow: "Método END · IRIS",
    title: "IRIS para medição ultrassônica rotativa no interior de tubos.",
    intro: "A técnica utiliza um feixe ultrassônico refletido por um espelho rotativo e requer tubo preenchido por água, limpeza, centralização e acesso interno compatíveis.",
    accent: "Rotação · espessura · tubo",
    sections: [
      { title: "Como funciona", copy: "A sonda é deslocada pelo tubo enquanto o espelho rotativo direciona o feixe para a parede, produzindo leituras circunferenciais de espessura." },
      { title: "Aplicações", copy: "Tubos de trocadores e caldeiras em materiais compatíveis, para mapeamento de perda interna ou externa conforme cobertura planejada.", bullets: ["Trocadores", "Caldeiras", "Tubos ferromagnéticos ou não", "Mapeamento circunferencial"] },
      { title: "Limitações", copy: "Requer limpeza, água, diâmetro e acesso adequados. Curvas, incrustação, velocidade de puxamento e centralização afetam os dados." },
      { title: "Segurança e qualidade", copy: "Preparação, padrão, verificação do sistema, velocidade, cobertura, rastreabilidade e descarte de água precisam integrar o procedimento." },
    ],
    related: [{ label: "Correntes parasitas", href: "/end/ect" }, { label: "Medição de espessura", href: "/end/medicao-de-espessura" }],
  },
  videoscopia: {
    eyebrow: "Método END · RVI",
    title: "Videoscopia para inspeção visual remota com registro rastreável.",
    intro: "Uma sonda com câmera e iluminação acessa regiões que não permitem observação direta. O resultado depende de limpeza, alcance, articulação, campo de visão e referência dimensional.",
    accent: "Acesso remoto · imagem · documentação",
    sections: [
      { title: "Como funciona", copy: "A sonda é conduzida pela cavidade e transmite imagem em tempo real. Posição, orientação e achados podem ser fotografados ou gravados." },
      { title: "Aplicações", copy: "Tubulações, caixas, motores, turbinas, trocadores e cavidades, como triagem visual ou apoio a outros métodos.", bullets: ["Cavidades", "Tubos", "Componentes internos", "Verificação de limpeza"] },
      { title: "Limitações", copy: "Linha de visada, sujeira, condensação, diâmetro, curvas e ausência de escala podem limitar localização e dimensionamento." },
      { title: "Segurança e qualidade", copy: "Isolamento, risco de perda da sonda, limpeza, resolução, iluminação, escala e identificação dos arquivos devem ser planejados." },
    ],
    related: [{ label: "Visual e Endoscópica", href: "/end/vt-ev" }, { label: "Tubulações", href: "/ativos/tubulacoes" }],
  },
  drones: {
    eyebrow: "Plataforma de acesso · UAS",
    title: "Drones ampliam o acesso e a aquisição — não substituem o método de inspeção.",
    intro: "A aeronave é uma plataforma para obter imagens ou carregar sensores compatíveis. O valor técnico depende do sensor, planejamento de voo, resolução, distância, ambiente e método associado.",
    accent: "Acesso · aquisição · sensor",
    sections: [
      { title: "Como funciona", copy: "Um plano de missão posiciona câmera ou sensor diante das regiões de interesse. Os registros são vinculados ao ativo e analisados segundo o objetivo definido." },
      { title: "Aplicações", copy: "Triagem visual de áreas elevadas, fachadas, coberturas, torres e estruturas, além de aquisição termográfica quando tecnicamente viável.", bullets: ["Torres", "Fachadas", "Coberturas", "Estruturas extensas"] },
      { title: "Limitações", copy: "Vento, iluminação, distância, oclusão, autonomia, interferência, legislação e resolução limitam cobertura. O drone não confirma por si só uma descontinuidade interna." },
      { title: "Segurança e qualidade", copy: "Operação, piloto, aeronave, espaço aéreo, análise de risco, distância segura, autorização e proteção de dados devem ser validados antes do uso." },
    ],
    related: [{ label: "Visual e Endoscópica", href: "/end/vt-ev" }, { label: "Termografia", href: "/end/termografia" }],
    pending: true,
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
  mineracao: {
    eyebrow: "Setor · Mineração",
    title: "Desgaste, impacto e acesso exigem inspeção conectada à operação.",
    intro: "Estruturas, correias, silos, chutes, equipamentos e sistemas de apoio podem combinar abrasão, corrosão, fadiga, deformação e restrições severas de acesso.",
    accent: "Desgaste · disponibilidade · segurança",
    sections: [
      { title: "Ativos", copy: "Correias, silos, chutes, estruturas metálicas, tubulações, tanques e equipamentos de processo mineral." },
      { title: "Condições", copy: "Desgaste abrasivo, perda de espessura, trincas, soldas, desalinhamento e deterioração estrutural." },
      { title: "Planejamento", copy: "Acesso, poeira, parada, bloqueio, trabalho em altura e interferências operacionais condicionam o método e a cobertura." },
      { title: "Jornada END’R", copy: "Triar, medir, priorizar, intervir e validar com registros adequados ao ativo e ao risco." },
    ],
    pending: true,
  },
  "construcao-civil": {
    eyebrow: "Setor · Construção civil",
    title: "Estruturas e fachadas precisam de diagnóstico antes da recuperação.",
    intro: "Concreto, aço, revestimentos, juntas e interfaces construtivas exigem correlação entre manifestação visual, histórico, ambiente, carregamento e ensaios aplicáveis.",
    accent: "Concreto · aço · durabilidade",
    sections: [
      { title: "Ativos", copy: "Estruturas de concreto e metálicas, fachadas, lajes, pilares, vigas, coberturas e elementos de acesso." },
      { title: "Condições", copy: "Fissuras, infiltrações, corrosão, delaminação, perda de seção, deformações e falhas de interface." },
      { title: "Métodos", copy: "Inspeção visual, termografia e técnicas complementares são selecionadas conforme material, profundidade, acesso e objetivo." },
      { title: "Reconstrução", copy: "Preparação, compatibilidade do sistema de reparo, sequência executiva, cura e validação devem integrar o plano." },
    ],
  },
  "naval-offshore": {
    eyebrow: "Setor · Naval e Offshore",
    title: "Ambiente crítico requer escopo, competência e autorização explicitamente validados.",
    intro: "Cascos, plataformas, linhas, tanques, soldas e estruturas marítimas combinam corrosão, fadiga, acesso especializado e requisitos regulatórios específicos.",
    accent: "Ambiente marinho · acesso · regulação",
    sections: [
      { title: "Ativos", copy: "Cascos, convés, estruturas, tanques, soldas, risers, linhas e componentes de processo — escopo efetivo a confirmar." },
      { title: "Condições", copy: "Corrosão, perda de espessura, trincas, revestimentos, soldas e danos por ambiente ou carregamento." },
      { title: "Restrições", copy: "Acesso por corda, espaço confinado, zona classificada, operação marítima e requisitos regulatórios exigem comprovação específica." },
      { title: "Regra de verdade", copy: "Esta página representa uma arquitetura de mercado. Não afirma experiência, equipe, habilitação ou contrato offshore da VRJB." },
    ],
    pending: true,
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

export const faqs = [
  {
    q: "Preciso saber qual método END solicitar?",
    a: "Não. Você pode começar pelo problema, pelo ativo ou pelo resultado que precisa. Material, geometria, acesso e criticidade ajudam a selecionar o método aplicável.",
  },
  {
    q: "O site confirma certificações ou equipamentos da VRJB?",
    a: "Ainda não. Essas áreas estão marcadas como conteúdo a validar. Nenhuma certificação, acreditação, cliente, equipamento ou número operacional foi presumido.",
  },
  {
    q: "O que o R acrescenta ao END?",
    a: "Representa o ciclo reconstrutivo: o diagnóstico orienta planejamento, reparo, recuperação ou substituição, seguido de validação e monitoramento.",
  },
  {
    q: "Drones são um método END?",
    a: "Não isoladamente. Drones são plataformas de acesso e aquisição que podem transportar câmeras ou sensores; o método técnico depende do sensor, procedimento e objetivo.",
  },
  {
    q: "O briefing enviado já é uma contratação?",
    a: "Não. O formulário organiza um briefing técnico inicial. Escopo, método, prazo, segurança e proposta dependem de análise e confirmação comercial.",
  },
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
