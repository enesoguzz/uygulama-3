import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DoktrinMetni } from "@/bilesenler/DoktrinMetni";
import { Ust } from "@/bilesenler/Ust";
import { doktrinGetir, yayindakiler } from "@/lib/doktrinler";

type Ozellikler = { params: Promise<{ slug: string }> };

// Yalnızca yayındaki doktrinlerin sayfası üretilir; "yakında" olanların sayfası yoktur.
export const dynamicParams = false;

export function generateStaticParams() {
  return yayindakiler().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Ozellikler): Promise<Metadata> {
  const doktrin = doktrinGetir((await params).slug);
  if (!doktrin) return {};
  return {
    title: doktrin.baslik,
    description: doktrin.ozet,
    openGraph: {
      type: "article",
      title: doktrin.baslik,
      description: doktrin.ozet,
      publishedTime: doktrin.tarih.toISOString(),
    },
  };
}

export default async function DoktrinSayfasi({ params }: Ozellikler) {
  const doktrin = doktrinGetir((await params).slug);
  if (!doktrin) notFound();

  return (
    <>
      <Ust />
      <main>
        <DoktrinMetni doktrin={doktrin} bicim="tam" />
      </main>
    </>
  );
}
