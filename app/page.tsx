import type { Metadata } from "next";
import { HomePage } from "@/components/vrjb-site";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "VRJB END’R | Ensaios Não Destrutivos Reconstrutivos",
  description:
    "Da detecção à reconstrução: inspeção, diagnóstico, planejamento, intervenção, validação e monitoramento de ativos.",
  keywords: ["ensaios não destrutivos", "END", "NDT", "ultrassom industrial", "inspeção industrial", "integridade estrutural", "reconstrução industrial"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "VRJB END’R | Ensaios Não Destrutivos Reconstrutivos",
    description: "Detectamos. Diagnosticamos. Reconstruímos.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    images: [{ url: "/assets/vrjb-pipeline-scan.webp", width: 1600, height: 900, alt: "VRJB END’R — Ensaios Não Destrutivos Reconstrutivos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VRJB END’R",
    description: "Ensaios Não Destrutivos Reconstrutivos.",
    images: ["/assets/vrjb-pipeline-scan.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VRJB END’R",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description: "Ensaios Não Destrutivos Reconstrutivos.",
};

const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{
    "@type": "ListItem",
    position: 1,
    name: "Início",
    item: `${siteUrl}/`,
  }],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbSchema) }}
      />
      <HomePage />
    </>
  );
}
