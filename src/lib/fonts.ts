import { Cormorant_Garamond, Syne } from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
