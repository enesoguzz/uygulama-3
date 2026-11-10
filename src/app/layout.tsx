import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { AltBolum } from "@/bilesenler/AltBolum";
import { acilisBetigi } from "@/lib/acilis";
import { site } from "@/site";
import "./globals.css";

// ğ, ş ve İ "latin-ext" alt kümesindedir; yalnızca "latin" ile yedek yazı tipine düşerler.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.ad, template: `%s · ${site.ad}` },
  description: site.aciklama,
};

export const viewport: Viewport = {
  themeColor: "#0a1a3f",
};

export default function KokDuzen({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${bricolage.variable} ${manrope.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: acilisBetigi }} />
      </head>
      <body>
        <div id="ust" className="kabuk">
          {children}
          <AltBolum />
        </div>
      </body>
    </html>
  );
}
