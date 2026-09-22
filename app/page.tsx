import type { Metadata } from "next";
import { HomePage } from "@/components/vrjb-site";

export const metadata: Metadata = {
  title: "VRJB END’R | Ensaios Não Destrutivos Reconstrutivos",
  description:
    "Da detecção à reconstrução: inspeção, diagnóstico, planejamento, intervenção, validação e monitoramento de ativos.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VRJB END’R | Ensaios Não Destrutivos Reconstrutivos",
    description: "Detectamos. Diagnosticamos. Reconstruímos.",
    type: "website",
    locale: "pt_BR",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "VRJB END’R",
    description: "Ensaios Não Destrutivos Reconstrutivos.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VRJB END’R",
  url: "https://vrjb-endr.romeufranco.chatgpt.site",
  description: "Ensaios Não Destrutivos Reconstrutivos.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomePage />
    </>
  );
}
