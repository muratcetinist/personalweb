import type { Metadata } from "next";
import { SITE } from "./constants";

export const siteMetadata: Metadata = {
  title: SITE.name,
  description: SITE.tagline,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE.name,
    description: SITE.tagline,
  },
  metadataBase: new URL(SITE.url),
};
