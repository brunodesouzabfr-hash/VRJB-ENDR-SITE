import type { Metadata } from "next";
import { RoutedPage } from "@/components/vrjb-site";
import { contentForPath } from "@/lib/site-data";

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

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { path } = await params;
  const key = path.join("/");
  const content = contentForPath(path);
  const fallback = specialMeta[key];
  const title = content ? `${content.eyebrow} | VRJB END’R` : fallback?.title ?? "VRJB END’R";
  const description = content?.intro ?? fallback?.description ?? "Ensaios Não Destrutivos Reconstrutivos.";
  const canonical = `/${key}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "website", locale: "pt_BR", url: canonical },
    twitter: { card: "summary", title, description },
  };
}

export default async function Route({ params }: RouteProps) {
  const { path } = await params;
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RoutedPage path={path} content={content} />
    </>
  );
}
