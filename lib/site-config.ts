const fallbackSiteUrl = "https://vrjb-endr.romeufranco.chatgpt.site";

// TODO: substituir pela URL oficial confirmada antes do go-live.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, "");
