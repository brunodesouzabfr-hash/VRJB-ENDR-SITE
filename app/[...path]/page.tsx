import type { Metadata } from "next";
import { RoutedPage } from "@/components/vrjb-site";
import { contentForPath, faqs, methodDetails } from "@/lib/site-data";

type RouteProps = { params: Promise<{ path: string[] }> };

const specialMeta: Record<string, { title: string; description: string }> = {
  endr: {
    title: "END’R | Da inspeção à reconstrução",
    description: "Conheça o ciclo VRJB: inspecionar, detectar, diagnosticar, planejar, reconstruir, validar e monitorar.",
  },
  "solicitar-diagnostico": {
    title: "Solicitar diagnóstico | VRJB END’R",
    description: "Organize ativo, problema, urgência, acesso e documentos em um briefing técnico inicial.",
  },
  faq: {
    title: "Perguntas frequentes | VRJB END’R",
    description: "Entenda o processo END’R, a seleção de métodos e os critérios de validação.",
  },
  contato: {
    title: "Contato | VRJB END’R",
    description: "Inicie uma conversa técnica ou prepare um briefing para diagnóstico.",
  },
};

const seoKeywords = [
  "ensaios não destrutivos",
  "END",
  "NDT",
  "ultrassom industrial",
  "inspeção de solda",
  "medição de espessura",
  "líquido penetrante",
  "partículas magnéticas",
  "radiografia industrial",
  "eddy current",
  "termografia preditiva",
  "integridade estrutural",
  "reconstrução industrial",
];

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { path } = await params;
  const key = path.join("/");
  const content = contentForPath(path);
  const fallback = specialMeta[key];
  const title = content ? `${content.title} | VRJB END’R` : fallback?.title ?? "VRJB END’R";
  const description = content?.intro ?? fallback?.description ?? "Ensaios Não Destrutivos Reconstrutivos.";
  const canonical = `/${key}`;
  return {
    title,
    description,
    keywords: [content?.eyebrow, content?.accent, ...seoKeywords].filter(Boolean) as string[],
    alternates: { canonical },
    openGraph: { title, description, type: "website", locale: "pt_BR", url: canonical, images: [{ url: "/assets/vrjb-pipeline-scan.webp", width: 1600, height: 900, alt: "VRJB END’R — inspeção e reconstrução de ativos" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/vrjb-pipeline-scan.webp"] },
  };
}

export default async function Route({ params }: RouteProps) {
  const { path } = await params;
  const key = path.join("/");
  const content = contentForPath(path);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://vrjb-endr.romeufranco.chatgpt.site/" },
      ...path.map((part, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: part.replaceAll("-", " "),
        item: `https://vrjb-endr.romeufranco.chatgpt.site/${path.slice(0, index + 1).join("/")}`,
      })),
    ],
  };
  const schemas: object[] = [breadcrumbSchema];
  if (key === "faq") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }
  if (path[0] === "end" && path[1] && methodDetails[path[1]]) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: methodDetails[path[1]].title,
      serviceType: methodDetails[path[1]].eyebrow.replace("Método END · ", ""),
      description: methodDetails[path[1]].intro,
      areaServed: { "@type": "Country", name: "BR" },
      provider: { "@type": "Organization", name: "VRJB END’R", url: "https://vrjb-endr.romeufranco.chatgpt.site" },
    });
  }
  return (
    <>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <RoutedPage path={path} content={content} />
    </>
  );
}
