"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Camera,
  CheckCircle2,
  Crosshair,
  Plane,
  Radio,
  ScanLine,
  Thermometer,
  Waves,
} from "lucide-react";

const inspectionMedia = [
  {
    src: "/assets/inspections/ultrassom-campo.webp",
    alt: "Técnico utilizando transdutor de ultrassom em uma solda de tubulação industrial",
    title: "Ultrassom em campo",
    tag: "UT · aquisição",
  },
  {
    src: "/assets/inspections/videoscopia-campo.webp",
    alt: "Inspeção visual remota no interior de uma tubulação industrial com videoscópio",
    title: "Videoscopia",
    tag: "RVI · acesso remoto",
  },
  {
    src: "/assets/inspections/drone-industrial.webp",
    alt: "Drone industrial inspecionando uma torre de processo em refinaria",
    title: "Acesso com drones",
    tag: "UAS · aquisição",
  },
  {
    src: "/assets/inspections/termografia-campo.webp",
    alt: "Técnico realizando termografia infravermelha em equipamento industrial",
    title: "Termografia",
    tag: "IR · padrão térmico",
  },
  {
    src: "/assets/inspections/ect-trocador.webp",
    alt: "Sonda de correntes parasitas aplicada em tubos de um trocador de calor",
    title: "Correntes parasitas",
    tag: "ECT · tubos",
  },
  {
    src: "/assets/inspections/superficie-solda.webp",
    alt: "Inspeção superficial de solda com iluminação técnica em ambiente industrial",
    title: "Ensaio de superfície",
    tag: "LP / PM · indicação",
  },
] as const;

export function AnomalyCallout() {
  return (
    <aside className="anomaly-callout" aria-label="Exemplo ilustrativo de chamada de anomalia">
      <span className="example-badge">Exemplo ilustrativo</span>
      <div className="anomaly-title"><Crosshair /> Indicação em análise</div>
      <dl>
        <div><dt>ID</dt><dd>P-0137</dd></div>
        <div><dt>PROF.</dt><dd>12,4 mm</dd></div>
        <div><dt>COMP.</dt><dd>36,8 mm</dd></div>
        <div><dt>TIPO</dt><dd>A confirmar</dd></div>
        <div><dt>STATUS</dt><dd>Simulação</dd></div>
      </dl>
    </aside>
  );
}

export function RadarHUD() {
  return (
    <div
      className="radar-hud"
      role="img"
      aria-label="Varredura ultrassônica, representação conceitual com dados ilustrativos"
    >
      <div className="radar-stage">
        <div className="radar-ring ring-a" />
        <div className="radar-ring ring-b" />
        <div className="radar-ring ring-c" />
        <div className="radar-cross cross-x" />
        <div className="radar-cross cross-y" />
        <div className="radar-sweep" />
        <i className="radar-dot dot-a" />
        <i className="radar-dot dot-b" />
        <i className="radar-dot dot-c" />
        <AnomalyCallout />
      </div>
      <div className="radar-readout">
        <span className="simulation-label">Dados ilustrativos</span>
        <strong>Varredura ultrassônica</strong>
        <dl>
          <div><dt>FREQ</dt><dd>5.0 MHz</dd></div>
          <div><dt>PROF</dt><dd>120 mm</dd></div>
          <div><dt>GANHO</dt><dd>32 dB</dd></div>
          <div><dt>MODO</dt><dd>PA</dd></div>
        </dl>
        <small>Representação conceitual — sem leitura operacional</small>
      </div>
    </div>
  );
}

export function LiveMonitoringPanel() {
  const metrics = [
    ["A-SCAN", "OK"],
    ["THICKNESS", "12.4 mm"],
    ["INTEGRITY", "98%"],
    ["TEMPERATURE", "28.1 °C"],
    ["PRESSURE", "1.02 bar"],
    ["STATUS", "ONLINE"],
  ];

  return (
    <section
      className="live-monitor"
      aria-label="Simulação de monitoramento técnico sem conexão a sensores reais"
    >
      <div className="live-monitor-head">
        <div><span className="simulation-label">Simulação</span><h3>Monitoramento em tempo real</h3></div>
        <span className="live-status"><i /> sem sensores reais</span>
      </div>
      <div className="live-monitor-body">
        <div className="signal-graph" role="img" aria-label="Onda técnica animada ilustrativa">
          <svg viewBox="0 0 720 240" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="signalFade" x1="0" x2="1">
                <stop offset="0" stopColor="#00c8e8" stopOpacity="0.08" />
                <stop offset="0.5" stopColor="#00c8e8" stopOpacity="0.7" />
                <stop offset="1" stopColor="#ff681d" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path className="signal-trace trace-one" d="M0 150 C55 32 94 212 148 105 S244 48 305 145 S410 210 470 92 S590 44 720 142" />
            <path className="signal-trace trace-two" d="M0 188 C70 130 118 174 178 92 S288 122 340 72 S455 178 520 112 S640 94 720 48" />
            <path className="signal-fill" d="M0 150 C55 32 94 212 148 105 S244 48 305 145 S410 210 470 92 S590 44 720 142 L720 240 L0 240 Z" />
            <circle cx="148" cy="105" r="6" className="signal-node cyan" />
            <circle cx="470" cy="92" r="7" className="signal-node orange" />
            <circle cx="650" cy="92" r="5" className="signal-node cyan" />
          </svg>
        </div>
        <dl className="monitor-metrics">
          {metrics.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
      <p className="monitor-disclaimer">SIMULAÇÃO — valores visuais demonstrativos, sem conexão a sensores ou ativos reais.</p>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="stats-shell" aria-label="Métricas ilustrativas a validar">
      <div className="site-container stats-bar">
        <article><strong>+1.200*</strong><span>ativos inspecionados</span></article>
        <article><strong>98%*</strong><span>confiabilidade nos diagnósticos</span></article>
        <article><strong>+15 anos*</strong><span>experiência combinada da equipe</span></article>
        <p><span className="example-badge">Exemplo — a validar</span>*Valores ilustrativos, a substituir por dados reais auditados.</p>
      </div>
    </section>
  );
}

export function BrandKitShowcase() {
  const colors = [
    ["60%", "Deep Petrol", "#071F24", "#071f24"],
    ["30%", "Midnight Navy", "#081421", "#081421"],
    ["10%", "Signal Orange", "#FF681D", "#ff681d"],
    ["Scan", "Cyber Cyan", "#00C8E8", "#00c8e8"],
  ];
  return (
    <section className="brand-kit" aria-label="Sistema visual funcional da VRJB END'R">
      <div className="brand-kit-head"><span className="eyebrow">Sistema de marca</span><h2>Paleta e tipografia com função técnica.</h2></div>
      <div className="brand-swatches">
        {colors.map(([ratio, name, hex, color]) => (
          <article key={name}><i style={{ background: color }} /><strong>{ratio}</strong><span>{name}</span><small>{hex}</small></article>
        ))}
      </div>
      <div className="type-specimen"><span>Display stencil funcional</span><strong>VRJB END’R</strong><p>DETECTAR · DIAGNOSTICAR · RECONSTRUIR</p></div>
    </section>
  );
}

export function PipelineVisual({ compact = false }: { compact?: boolean }) {
  const steps = [
    ["Detectar", Waves],
    ["Diagnosticar", Activity],
    ["Planejar", Radio],
    ["Reconstruir", ScanLine],
    ["Validar", CheckCircle2],
    ["Monitorar", Crosshair],
  ] as const;
  return (
    <div className={`pipeline-visual ${compact ? "is-compact" : ""}`} aria-label="Pipeline simplificado do processo END'R">
      {steps.map(([label, Icon], index) => (
        <article key={label}><span>0{index + 1}</span><Icon /><strong>{label}</strong>{index < steps.length - 1 && <ArrowRight aria-hidden="true" />}</article>
      ))}
    </div>
  );
}

export function IllustrativeGallery() {
  return (
    <div className="inspection-gallery">
      {inspectionMedia.map((item) => (
        <article key={item.src} className="inspection-media">
          <div className="inspection-image">
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" loading="lazy" />
            <span className="image-watermark">VRJB <b>END’R</b></span>
            <span className="illustrative-badge">Imagem ilustrativa</span>
          </div>
          <div><small>{item.tag}</small><h3>{item.title}</h3><p>Cena conceitual para demonstrar aplicação. Equipamento, equipe e operação não representam inventário ou case real da VRJB.</p></div>
        </article>
      ))}
    </div>
  );
}

const illustrativeCases = [
  {
    filter: "Tubulação",
    image: inspectionMedia[0],
    title: "Mapeamento de perda localizada",
    method: "VT + medição de espessura",
    copy: "Cenário editorial: indicação visual em linha de processo orienta malha de medição, planejamento de intervenção e validação pós-serviço.",
  },
  {
    filter: "Estrutura",
    image: inspectionMedia[3],
    title: "Triagem térmica de componente",
    method: "Termografia + inspeção visual",
    copy: "Cenário editorial: padrão térmico atípico conduz verificação complementar e definição de prioridade, sem substituir diagnóstico conclusivo.",
  },
] as const;

export function CasePortfolio() {
  const [filter, setFilter] = useState("Todos");
  const visible = filter === "Todos" ? illustrativeCases : illustrativeCases.filter((item) => item.filter === filter);
  return (
    <section className="case-portfolio">
      <div className="portfolio-controls" aria-label="Filtrar cases ilustrativos">
        {["Todos", "Tubulação", "Estrutura"].map((item) => (
          <button key={item} type="button" className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      <div className="case-grid">
        {visible.map((item) => (
          <article key={item.title}>
            <div className="case-image"><Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /><span className="image-watermark">VRJB <b>END’R</b></span></div>
            <span className="example-badge">Case ilustrativo — não descreve cliente real</span>
            <small>{item.method}</small><h3>{item.title}</h3><p>{item.copy}</p>
            <Link href="/solicitar-diagnostico">Estruturar cenário semelhante <ArrowRight /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export const mediaIcons = { Camera, Plane, Thermometer };
