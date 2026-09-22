"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clipboard,
  FileText,
  Menu,
  MessageCircle,
  MoveRight,
  Search,
  ScanLine,
  ShieldCheck,
  Upload,
  Waves,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  BrandKitShowcase,
  CasePortfolio,
  IllustrativeGallery,
  LiveMonitoringPanel,
  PipelineVisual,
  RadarHUD,
  StatsBar,
} from "@/components/vrjb/technical-visuals";
import {
  assets,
  endrProcess,
  faqs,
  footerLinks,
  methods,
  pathways,
  primaryNav,
  principleCards,
  problems,
  routeContent,
  sectors,
  type CardItem,
  type RouteContent,
} from "@/lib/site-data";

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand-mark" aria-label="VRJB END’R — início">
      {/* Lockup funcional de protótipo — substituir por SVG oficial quando aprovado */}
      <span className="brand-symbol" aria-hidden="true"><i />VRJB</span>
      {!compact && (
        <span className="brand-lockup">
          <strong>END’R</strong>
          <small>Ensaios Não Destrutivos Reconstrutivos</small>
        </span>
      )}
    </Link>
  );
}

const searchItems = [
  ...methods.map((item) => ({ label: item.title, href: item.href, group: "Métodos", terms: `${item.eyebrow} ${item.description}` })),
  ...problems.map((item) => ({ label: item.title, href: item.href, group: "Problemas", terms: item.description })),
  ...assets.map((item) => ({ label: item.title, href: item.href, group: "Ativos", terms: item.description })),
  ...sectors.map((item) => ({ label: item.title, href: item.href, group: "Setores", terms: item.description })),
  ...Object.entries(routeContent).map(([slug, item]) => ({ label: item.eyebrow, href: `/${slug}`, group: "Páginas", terms: `${item.title} ${item.intro}` })),
];

function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const normalizedQuery = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const filteredSearchItems = normalizedQuery
    ? searchItems.filter((item) => `${item.label} ${item.terms}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedQuery))
    : searchItems;

  useEffect(() => {
    function shortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);

  function select(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <>
      <Button variant="outline" size="icon" className="search-button" aria-label="Buscar no site" onClick={() => setOpen(true)}><Search /></Button>
      <CommandDialog open={open} onOpenChange={(nextOpen) => { setOpen(nextOpen); if (!nextOpen) setQuery(""); }} title="Buscar na VRJB END’R" description="Busque por método, problema, ativo, setor ou página" className="site-search-dialog">
        <CommandInput value={query} onValueChange={setQuery} placeholder="Ex.: corrosão, ultrassom, tubulação..." />
        <CommandList>
          <CommandEmpty>Nenhum conteúdo encontrado.</CommandEmpty>
          {["Métodos", "Problemas", "Ativos", "Setores", "Páginas"].map((group) => (
            <CommandGroup key={group} heading={group}>
              {filteredSearchItems.filter((item) => item.group === group).map((item) => (
                <CommandItem key={`${group}-${item.href}`} value={`${item.label} ${item.terms}`} onSelect={() => select(item.href)}>
                  <Search /><span>{item.label}</span><small>{item.href}</small>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

function IntroSequence() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem("vrjb-intro-seen");
    if (reduced || seen) return;
    const showTimer = window.setTimeout(() => setVisible(true), 0);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem("vrjb-intro-seen", "1");
    }, 1850);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-sequence" aria-hidden="true">
      <div className="intro-grid" />
      <div className="intro-radar"><span /></div>
      <div className="intro-wordmark">VRJB <em>END’R</em></div>
      <div className="intro-scan" />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <SearchPalette />
          <Button asChild className="btn-primary header-cta">
            <Link href="/solicitar-diagnostico">Solicitar diagnóstico <ArrowRight /></Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="menu-button" aria-label="Abrir menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-sheet">
              <SheetHeader>
                <SheetTitle><BrandMark compact /></SheetTitle>
                <SheetDescription>Navegue pelo problema, ativo, método ou setor.</SheetDescription>
              </SheetHeader>
              <nav className="mobile-nav" aria-label="Navegação móvel">
                {primaryNav.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link href={item.href}>{item.label}<ArrowRight /></Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mobile-sheet-cta">
                <SheetClose asChild>
                  <Link href="/solicitar-diagnostico" className="btn-primary">Solicitar diagnóstico <ArrowRight /></Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <BrandMark />
          <p>Da detecção à reconstrução. Um sistema digital preparado para transformar contexto técnico em decisões mais claras.</p>
        </div>
        <div>
          <span className="footer-label">Explorar</span>
          <div className="footer-links">
            {footerLinks.slice(0, 4).map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </div>
        </div>
        <div>
          <span className="footer-label">Evidência</span>
          <div className="footer-links">
            {footerLinks.slice(4).map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </div>
        </div>
        <div className="footer-contact">
          <span className="footer-label">Próximo passo</span>
          <Link href="/solicitar-diagnostico">Qualificar uma demanda <ArrowRight /></Link>
          <small>Canais comerciais, endereço e cobertura geográfica: conteúdo a validar.</small>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>VRJB END’R — protótipo institucional</span>
        <span>Dados reais. Decisões responsáveis.</span>
      </div>
    </footer>
  );
}

function SiteShell({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".section, .pathway-band, .stats-shell"));
    if (!reduced) revealItems.forEach((item) => item.classList.add("reveal-pending"));
    if (reduced) revealItems.forEach((item) => item.classList.add("is-visible"));
    const observer = reduced ? null : new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    if (observer) revealItems.forEach((item) => observer.observe(item));

    function updateProgress() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    }
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      <IntroSequence />
      <div className="scroll-progress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></div>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
      <Link className="mobile-sticky-cta" href="/solicitar-diagnostico">
        Solicitar diagnóstico <ArrowRight />
      </Link>
    </>
  );
}

// TODO: substituir pelo contato oficial antes do go-live
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+55 00 00000-0000";
// TODO: substituir pelo contato oficial antes do go-live
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contato@exemplo.invalid";
const whatsappDigits = whatsappNumber.replace(/\D/g, "");

function WhatsAppButton({ message = "Olá, gostaria de falar sobre uma necessidade de inspeção." }: { message?: string }) {
  const href = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
  return <a className="whatsapp-button" href={href} target="_blank" rel="noreferrer" aria-label={`Abrir WhatsApp. Canal ilustrativo: ${whatsappNumber}`}><MessageCircle /><span>WhatsApp</span><small>canal a validar</small></a>;
}

function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-index"><span>{index}</span><i /></div>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <Image
        src="/assets/vrjb-pipeline-scan.webp"
        alt="Tubulação industrial com representação conceitual de varredura ultrassônica em ciano e indicação de intervenção em laranja"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <span className="image-watermark hero-watermark">VRJB <b>END’R</b></span>
      <div className="hero-scrim" />
      <div className="technical-grid" aria-hidden="true" />
      <div className="hero-scanline" aria-hidden="true" />
      <div className="site-container hero-content">
        <div className="hero-copy">
          <span className="eyebrow hero-kicker"><span className="status-pulse" /> Ensaios Não Destrutivos Reconstrutivos</span>
          <h1>
            Detectamos.<br />
            Diagnosticamos.<br />
            <em>Reconstruímos.</em>
          </h1>
          <p>Da leitura do sinal ao planejamento da intervenção — com cada afirmação sustentada por contexto, método e evidência.</p>
          <div className="hero-actions">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/solicitar-diagnostico">Solicitar diagnóstico <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-secondary">
              <Link href="/endr">Entender o END’R <ArrowDown /></Link>
            </Button>
          </div>
        </div>
        <div className="hero-instrument">
          <RadarHUD />
        </div>
      </div>
      <div className="site-container hero-rail">
        <span><Waves /> Inspeção</span>
        <MoveRight />
        <span><ScanLine /> Diagnóstico</span>
        <MoveRight />
        <span><Wrench /> Reconstrução</span>
        <MoveRight />
        <span><ShieldCheck /> Validação</span>
      </div>
    </section>
  );
}

function PathwayBand() {
  return (
    <section className="pathway-band" aria-label="Escolha como explorar">
      <div className="site-container pathway-grid">
        <div className="pathway-intro">
          <span className="eyebrow">Não sabe qual ensaio precisa?</span>
          <h2>Comece pelo que você já sabe.</h2>
        </div>
        <div className="pathway-links">
          {pathways.map(({ label, href, icon: Icon }, index) => (
            <Link key={href} href={href}>
              <span className="pathway-number">0{index + 1}</span>
              <Icon />
              <strong>{label}</strong>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalCards({ items, variant = "default" }: { items: CardItem[]; variant?: "default" | "compact" }) {
  return (
    <div className={`technical-cards ${variant === "compact" ? "is-compact" : ""}`}>
      {items.map(({ title, description, href, eyebrow, icon: Icon }, index) => (
        <Link key={href} href={href} className="technical-card">
          <div className="card-top">
            <span>{eyebrow || `0${index + 1}`}</span>
            <Icon />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="card-link">Explorar <ArrowRight /></div>
          <div className="card-scan" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

function ProcessTimeline({ condensed = false }: { condensed?: boolean }) {
  return (
    <div className={`process-timeline ${condensed ? "is-condensed" : ""}`}>
      {endrProcess.map((step) => (
        <article key={step.index} className={`process-step tone-${step.tone}`}>
          <span className="process-number">{step.index}</span>
          <div className="process-node"><i /></div>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
        </article>
      ))}
    </div>
  );
}

function ScanStory() {
  const stages = [
    { label: "Ativo", copy: "Condição real de campo", icon: Wrench },
    { label: "Scan", copy: "Sinal adquirido", icon: Waves },
    { label: "Indicação", copy: "Anomalia localizada", icon: ScanLine },
    { label: "Decisão", copy: "Intervenção planejada", icon: ShieldCheck },
  ];

  return (
    <div className="scan-story">
      <div className="scan-object" aria-hidden="true">
        <div className="pipe-schematic">
          <span className="pipe-seam" />
          <span className="pipe-anomaly" />
          <span className="pipe-scan" />
        </div>
      </div>
      <div className="scan-stages">
        {stages.map(({ label, copy, icon: Icon }, index) => (
          <div className="scan-stage" key={label}>
            <span>0{index + 1}</span>
            <Icon />
            <div><strong>{label}</strong><small>{copy}</small></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <StatsBar />
      <PathwayBand />

      <section className="section section-problems">
        <div className="site-container">
          <SectionHeading index="01" eyebrow="Problemas" title="O site começa pela condição, não pela sigla." copy="Descreva o que está acontecendo. O sistema ajuda a organizar as perguntas técnicas antes de definir o método." />
          <TechnicalCards items={problems} />
        </div>
      </section>

      <section className="section section-endr">
        <div className="site-container">
          <SectionHeading index="02" eyebrow="Diferencial END’R" title="A inspeção não termina no diagnóstico." copy="O ciclo conecta sinal, entendimento, intervenção e verificação pós-serviço." />
          <ProcessTimeline />
          <div className="section-action"><Link href="/endr">Ver a metodologia completa <ArrowRight /></Link></div>
        </div>
      </section>

      <section className="section section-scan">
        <div className="site-container split-heading">
          <SectionHeading index="03" eyebrow="Linguagem técnica" title="Ciano lê. Laranja intervém." copy="As cores funcionam como informação: inspeção e dados em ciano; ação reconstrutiva em laranja; integridade em petróleo." />
          <div className="principle-stack">
            {principleCards.map(({ icon: Icon, tag, title, copy }) => (
              <article key={title}><Icon /><span>{tag}</span><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
        </div>
        <div className="site-container"><ScanStory /></div>
      </section>

      <section className="section section-methods">
        <div className="site-container">
          <SectionHeading index="04" eyebrow="Métodos END" title="Princípios físicos explicados com clareza." copy="Cada página organiza funcionamento, aplicações, vantagens, limitações, segurança e métodos complementares." />
          <TechnicalCards items={methods} />
          <div className="section-action"><Link href="/end">Explorar todos os métodos <ArrowRight /></Link></div>
        </div>
      </section>

      <section className="section section-assets">
        <div className="site-container">
          <SectionHeading index="05" eyebrow="Ativos" title="A geometria do ativo muda a estratégia." copy="Tubulações, tanques, estruturas e equipamentos ganham rotas próprias para aproximar o conteúdo da situação real." />
          <TechnicalCards items={assets} variant="compact" />
        </div>
      </section>

      <section className="section section-sectors">
        <div className="site-container">
          <SectionHeading index="06" eyebrow="Setores" title="O mesmo sinal pode significar riscos diferentes." copy="As páginas setoriais contextualizam operação, ativos e decisões sem inventar experiência não documentada." />
          <TechnicalCards items={sectors} variant="compact" />
        </div>
      </section>

      <section className="section technology-manifesto">
        <div className="site-container tech-grid-layout">
          <div className="tech-copy">
            <span className="eyebrow">07 · Tecnologia</span>
            <h2>Dados que orientam decisões reais.</h2>
            <p>O design técnico não simula uma operação existente. Ele prepara o caminho para dados, relatórios, certificados e histórico de inspeção quando as integrações forem implementadas.</p>
            <div className="tech-links">
              <Link href="/tecnologia">Arquitetura tecnológica <ArrowRight /></Link>
              <Link href="/equipamentos">Inventário a validar <ArrowRight /></Link>
            </div>
          </div>
          <LiveMonitoringPanel />
        </div>
      </section>

      <section className="section field-gallery-section">
        <div className="site-container">
          <SectionHeading index="08" eyebrow="Aplicações ilustrativas" title="Tecnologia vista no contexto de campo." copy="As cenas são imagens conceituais para explicar métodos e acesso. Não representam equipe, equipamento ou case real da VRJB." />
          <IllustrativeGallery />
        </div>
      </section>

      <section className="section proof-section">
        <div className="site-container">
          <SectionHeading index="09" eyebrow="Evidência" title="O que ainda não foi validado fica visivelmente pendente." copy="O sistema já possui módulos para cases, equipamentos, certificações e qualificações — sem preencher lacunas com alegações fictícias." />
          <div className="proof-grid">
            {[
              ["Cases", "Template pronto; conteúdo real pendente.", "/cases"],
              ["Certificações", "Publicação condicionada a documento e escopo.", "/certificacoes"],
              ["Equipamentos", "Inventário condicionado a fabricante, modelo e status.", "/equipamentos"],
              ["Qualidade", "Procedimentos e rastreabilidade preparados para validação.", "/qualidade"],
            ].map(([title, copy, href]) => (
              <Link key={href} href={href}>
                <span className="pending-tag">Conteúdo a validar</span><h3>{title}</h3><p>{copy}</p><ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="site-container faq-layout">
          <div><span className="eyebrow">10 · Perguntas frequentes</span><h2>Clareza antes do contato.</h2><p>Respostas diretas para reduzir atrito sem prometer o que ainda precisa ser avaliado.</p></div>
          <FaqAccordion />
        </div>
      </section>

      <FinalCta />
    </SiteShell>
  );
}

function FaqAccordion() {
  return (
    <Accordion className="faq-accordion">
      {faqs.map((item, index) => (
        <AccordionItem key={item.q} value={`item-${index}`}>
          <AccordionTrigger><span>0{index + 1}</span>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="technical-grid" aria-hidden="true" />
      <div className="site-container final-cta-inner">
        <span className="eyebrow">Próximo passo</span>
        <h2>Transforme o problema em um briefing técnico.</h2>
        <p>Organize ativo, condição, urgência, acesso e documentos antes da conversa comercial.</p>
        <Button asChild size="lg" className="btn-primary"><Link href="/solicitar-diagnostico">Solicitar diagnóstico <ArrowRight /></Link></Button>
      </div>
    </section>
  );
}

function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="breadcrumbs" aria-label="Navegação estrutural">
      <Link href="/">Início</Link>
      {items.map((item) => (
        <span key={item.label}><i>/</i>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>
      ))}
    </nav>
  );
}

function StandardRoute({ content, path }: { content: RouteContent; path: string[] }) {
  const crumb = path.map((part, index) => ({
    label: part.replaceAll("-", " "),
    href: index < path.length - 1 ? `/${path.slice(0, index + 1).join("/")}` : undefined,
  }));

  return (
    <SiteShell>
      <section className="route-hero">
        <div className="technical-grid" aria-hidden="true" />
        <div className="route-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="site-container route-hero-inner">
          <Breadcrumbs items={crumb} />
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <div className="route-accent"><ScanLine /> {content.accent}</div>
          {content.pending && <span className="pending-banner">Conteúdo a validar antes da publicação comercial</span>}
        </div>
      </section>
      <section className="route-content section">
        <div className="site-container route-content-grid">
          {content.sections.map((section, index) => (
            <article key={section.title}>
              {section.badge && <span className="example-badge route-example-badge">{section.badge}</span>}
              <span className="route-number">0{index + 1}</span>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </article>
          ))}
        </div>
        {path[0] === "tecnologia" && <div className="site-container route-module"><LiveMonitoringPanel /></div>}
        {path[0] === "sobre" && (
          <div className="site-container route-module stacked-modules">
            <PipelineVisual />
            <BrandKitShowcase />
            <StatsBar />
          </div>
        )}
        {path[0] === "cases" && <div className="site-container route-module"><CasePortfolio /></div>}
        {path[0] === "equipamentos" && <div className="site-container route-module"><IllustrativeGallery /></div>}
        {path[0] === "end" && path.length === 1 && <div className="site-container route-module"><IllustrativeGallery /></div>}
        {content.related && (
          <div className="site-container related-links">
            <span className="eyebrow">Próximas leituras</span>
            <div>{content.related.map((item) => <Link key={item.href} href={item.href}>{item.label}<ArrowRight /></Link>)}</div>
          </div>
        )}
      </section>
      <FinalCta />
    </SiteShell>
  );
}

function EndrPage() {
  return (
    <SiteShell>
      <section className="route-hero endr-hero">
        <div className="technical-grid" aria-hidden="true" />
        <div className="site-container route-hero-inner">
          <Breadcrumbs items={[{ label: "END’R" }]} />
          <span className="eyebrow">A metodologia central</span>
          <h1>O “R” começa onde muitos diagnósticos terminam.</h1>
          <p>Inspeção, detecção e diagnóstico formam a base. Planejamento, reconstrução, validação e monitoramento transformam informação em continuidade.</p>
          <div className="route-accent"><Wrench /> Do diagnóstico à reconstrução</div>
        </div>
      </section>
      <section className="section endr-process-page">
        <div className="site-container">
          <SectionHeading index="01" eyebrow="Ciclo completo" title="Sete etapas. Uma linha de responsabilidade." copy="Cada etapa possui uma pergunta, uma evidência e uma saída. O processo real será ajustado ao escopo, à segurança e às normas aplicáveis." />
          <ProcessTimeline />
          <PipelineVisual compact />
        </div>
      </section>
      <section className="section decision-layer">
        <div className="site-container decision-grid">
          <div>
            <span className="eyebrow">02 · Portões de decisão</span>
            <h2>Antes de avançar, o processo precisa responder.</h2>
          </div>
          <div className="decision-cards">
            {[
              ["Verdade", "O dado tem origem, contexto e limitação declarados?"],
              ["Técnica", "O método é aplicável ao material, geometria e objetivo?"],
              ["Execução", "A intervenção é compatível com acesso, segurança e operação?"],
              ["Validação", "O resultado pós-serviço foi verificado e documentado?"],
            ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <FinalCta />
    </SiteShell>
  );
}

function DiagnosticForm() {
  const [sector, setSector] = useState("");
  const [asset, setAsset] = useState("");
  const [problem, setProblem] = useState("");
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const files = data.getAll("anexos").filter((item) => item instanceof File && item.name).map((item) => (item as File).name);
    const output = [
      "BRIEFING TÉCNICO INICIAL — VRJB END’R",
      `Empresa: ${data.get("empresa") || "Não informado"}`,
      `Contato: ${data.get("contato") || "Não informado"}`,
      `E-mail/telefone: ${data.get("canal") || "Não informado"}`,
      `Setor: ${sector || "Não informado"}`,
      `Ativo: ${asset || "Não informado"}`,
      `Problema: ${problem || "Não informado"}`,
      `Material: ${data.get("material") || "Não informado"}`,
      `Localização do ativo: ${data.get("localizacao") || "Não informado"}`,
      `Dimensão/área: ${data.get("dimensao") || "Não informado"}`,
      `Urgência: ${data.get("urgencia") || "Não informado"}`,
      `Janela de parada: ${data.get("parada") || "Não informado"}`,
      `Descrição: ${data.get("descricao") || "Não informado"}`,
      `Arquivos selecionados: ${files.length ? files.join(", ") : "Nenhum"}`,
      "",
      "Observação: este briefing não define método, laudo, prazo ou proposta. Requer análise técnica e confirmação comercial.",
    ].join("\n");
    setSummary(output);
    setCopied(false);
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
  }

  return (
    <div className="diagnostic-layout">
      <form className="diagnostic-form" onSubmit={submit}>
        <div className="form-section">
          <div className="form-section-head"><span>01</span><div><h2>Contato</h2><p>Quem poderá esclarecer o contexto da demanda?</p></div></div>
          <div className="form-grid two">
            <div><Label htmlFor="empresa">Empresa</Label><Input id="empresa" name="empresa" placeholder="Nome da empresa" /></div>
            <div><Label htmlFor="contato">Pessoa de contato</Label><Input id="contato" name="contato" placeholder="Nome e função" required /></div>
            <div className="full"><Label htmlFor="canal">E-mail ou telefone</Label><Input id="canal" name="canal" placeholder="Canal para retorno" required /></div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-section-head"><span>02</span><div><h2>Contexto técnico</h2><p>Não precisa conhecer o método. Comece pela situação.</p></div></div>
          <div className="form-grid two">
            <div><Label>Setor</Label><Select value={sector} onValueChange={(value) => setSector(value ?? "")}><SelectTrigger className="form-select"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent>{["Petróleo e gás","Petroquímica","Saneamento","Energia","Indústria","Infraestrutura","Construção","Mineração","Outro"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></div>
            <div><Label>Ativo</Label><Select value={asset} onValueChange={(value) => setAsset(value ?? "")}><SelectTrigger className="form-select"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent>{["Tubulação","Tanque","Vaso","Solda","Estrutura metálica","Concreto","Canalização","Equipamento","Outro"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></div>
            <div><Label>Problema percebido</Label><Select value={problem} onValueChange={(value) => setProblem(value ?? "")}><SelectTrigger className="form-select"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent>{["Corrosão","Perda de espessura","Trinca","Solda","Vazamento","Infiltração","Deterioração","Inspeção preventiva","Outro"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></div>
            <div><Label htmlFor="material">Material, se conhecido</Label><Input id="material" name="material" placeholder="Ex.: aço carbono, concreto" /></div>
            <div><Label htmlFor="localizacao">Localização do ativo</Label><Input id="localizacao" name="localizacao" placeholder="Cidade / área da planta" /></div>
            <div><Label htmlFor="dimensao">Dimensão ou área aproximada</Label><Input id="dimensao" name="dimensao" placeholder="Se disponível" /></div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-section-head"><span>03</span><div><h2>Operação e urgência</h2><p>Estas respostas ajudam a identificar restrições de acesso e prazo.</p></div></div>
          <div className="form-grid two">
            <div><Label htmlFor="urgencia">Urgência</Label><select id="urgencia" name="urgencia" className="native-select"><option value="">Selecione</option><option>Planejamento</option><option>Curto prazo</option><option>Parada programada</option><option>Condição crítica percebida</option></select></div>
            <div><Label htmlFor="parada">Janela de parada</Label><select id="parada" name="parada" className="native-select"><option value="">Selecione</option><option>Ativo disponível</option><option>Parada a programar</option><option>Inspeção em operação a avaliar</option><option>Não sei informar</option></select></div>
            <div className="full"><Label htmlFor="descricao">Descrição da situação</Label><Textarea id="descricao" name="descricao" rows={6} placeholder="O que foi observado? Quando começou? Existe histórico, reparo anterior ou restrição de acesso?" required /></div>
            <div className="full file-field"><Label htmlFor="anexos"><Upload /> Fotos, plantas ou documentos</Label><Input id="anexos" name="anexos" type="file" multiple accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" /><small>Na prévia, os arquivos não são enviados. Apenas os nomes entram no briefing gerado.</small></div>
          </div>
        </div>
        <Button type="submit" size="lg" className="btn-primary form-submit">Gerar briefing técnico <FileText /></Button>
        <p className="form-privacy">Nenhum dado é transmitido nesta versão de protótipo. O canal seguro de envio será conectado após validação comercial e de privacidade.</p>
      </form>

      <aside className="brief-output" aria-live="polite">
        <div className="brief-output-head"><span className="eyebrow">Resultado</span><h2>Briefing inicial</h2></div>
        {summary ? (
          <>
            <pre>{summary}</pre>
            <div className="brief-actions">
              <Button type="button" variant="outline" onClick={copySummary}>{copied ? <Check /> : <Clipboard />}{copied ? "Copiado" : "Copiar briefing"}</Button>
              <Button asChild type="button" className="btn-primary"><a href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent(summary)}`} target="_blank" rel="noreferrer"><MessageCircle /> Enviar por WhatsApp</a></Button>
            </div>
            <small className="channel-warning">Canal a validar antes da publicação — número ilustrativo: {whatsappNumber}.</small>
          </>
        ) : (
          <div className="brief-empty"><ScanLine /><p>Preencha o formulário para organizar as informações em um resumo técnico pronto para compartilhar.</p></div>
        )}
        <div className="brief-rule"><ShieldCheck /><p>A definição de método, escopo e proposta depende de análise técnica. Este resumo não substitui diagnóstico ou laudo.</p></div>
      </aside>
    </div>
  );
}

function DiagnosticPage() {
  return (
    <SiteShell>
      <section className="route-hero form-hero">
        <div className="technical-grid" aria-hidden="true" />
        <div className="site-container route-hero-inner">
          <Breadcrumbs items={[{ label: "Solicitar diagnóstico" }]} />
          <span className="eyebrow">Qualificação técnica</span>
          <h1>Conte o que está acontecendo com o ativo.</h1>
          <p>O formulário organiza o contexto que uma conversa técnica precisa — mesmo quando o método END ainda não é conhecido.</p>
          <div className="route-accent"><FileText /> Briefing local e copiável</div>
        </div>
      </section>
      <section className="section diagnostic-section"><div className="site-container"><DiagnosticForm /></div></section>
    </SiteShell>
  );
}

function FaqPage() {
  return (
    <SiteShell>
      <section className="route-hero"><div className="technical-grid" aria-hidden="true" /><div className="site-container route-hero-inner"><Breadcrumbs items={[{label:"FAQ"}]} /><span className="eyebrow">Perguntas frequentes</span><h1>Respostas antes da proposta.</h1><p>O objetivo é esclarecer o processo sem simplificar demais a decisão técnica.</p></div></section>
      <section className="section"><div className="site-container faq-page"><FaqAccordion /></div></section>
      <FinalCta />
    </SiteShell>
  );
}

function ContactPage() {
  return (
    <SiteShell>
      <section className="route-hero"><div className="technical-grid" aria-hidden="true" /><div className="site-container route-hero-inner"><Breadcrumbs items={[{label:"Contato"}]} /><span className="eyebrow">Contato</span><h1>Primeiro, escolha a profundidade da conversa.</h1><p>Use o briefing técnico para demandas com contexto. Os canais abaixo são placeholders configuráveis até a confirmação oficial.</p><span className="pending-banner">Telefone, e-mail, endereço e região de atendimento: conteúdo a validar</span></div></section>
      <section className="section"><div className="site-container contact-grid"><article><span>01</span><h2>Falar com especialista</h2><p>Canal rápido reservado para dúvidas iniciais e triagem.</p><a className="contact-action" href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noreferrer"><MessageCircle /> Abrir WhatsApp</a><small>Canal a validar antes da publicação — número ilustrativo: {whatsappNumber}.</small></article><article><span>02</span><h2>Solicitar diagnóstico</h2><p>Organize ativo, problema, urgência, janela de parada e documentos disponíveis.</p><Link href="/solicitar-diagnostico">Abrir briefing técnico <ArrowRight /></Link></article><article><span>03</span><h2>E-mail comercial</h2><p>Variável preparada para receber o contato oficial sem alteração estrutural.</p><a className="contact-action" href={`mailto:${contactEmail}`}>{contactEmail}</a><small>Endereço ilustrativo e não monitorado.</small></article></div></section>
    </SiteShell>
  );
}

function NotFoundRoute() {
  return (
    <SiteShell>
      <section className="route-hero"><div className="technical-grid" aria-hidden="true" /><div className="site-container route-hero-inner"><span className="eyebrow">Rota não encontrada</span><h1>Este módulo ainda não existe.</h1><p>Volte à arquitetura principal ou comece pelo problema que deseja investigar.</p><Button asChild className="btn-primary"><Link href="/">Voltar ao início <ArrowRight /></Link></Button></div></section>
    </SiteShell>
  );
}

export function RoutedPage({ path, content }: { path: string[]; content?: RouteContent }) {
  const key = path.join("/");
  const page = useMemo(() => {
    if (key === "endr") return <EndrPage />;
    if (key === "solicitar-diagnostico") return <DiagnosticPage />;
    if (key === "faq") return <FaqPage />;
    if (key === "contato") return <ContactPage />;
    if (content) return <StandardRoute content={content} path={path} />;
    return <NotFoundRoute />;
  }, [content, key, path]);
  return <div key={key} className="page-transition">{page}</div>;
}
