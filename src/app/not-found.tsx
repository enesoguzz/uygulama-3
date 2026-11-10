import Link from "next/link";
import { Ust } from "@/bilesenler/Ust";

export default function Bulunamadi() {
  return (
    <>
      <Ust />
      <main style={{ maxWidth: "var(--genislik-metin)", margin: "0 auto", padding: "72px 16px 128px" }}>
        <p className="etiket">404</p>
        <h1 style={{ fontFamily: "var(--yazi-baslik)", fontSize: "var(--boyut-cumle)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
          Bu sayfa yok.
        </h1>
        <p>
          <Link href="/" style={{ color: "var(--vurgu)" }}>
            Ana sayfaya dön
          </Link>
        </p>
      </main>
    </>
  );
}
