import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vrjb-endr.romeufranco.chatgpt.site"),
  title: {
    default: "VRJB END’R",
    template: "%s",
  },
  description: "Ensaios Não Destrutivos Reconstrutivos.",
  applicationName: "VRJB END’R",
  category: "engineering",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#071f24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
