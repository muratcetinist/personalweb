import { cormorantGaramond, syne } from "@/lib/fonts";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${syne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
