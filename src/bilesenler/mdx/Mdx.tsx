import { evaluate } from "@mdx-js/mdx";
import * as calisma from "react/jsx-runtime";
import { AgSemasi } from "./AgSemasi";
import { BuyukCumle } from "./BuyukCumle";
import { Gorsel } from "./Gorsel";
import { Kaynaklar } from "./Kaynaklar";

/** Doktrin yazılarında kullanılabilen bileşenler. Yenisi eklenince buraya yazılır. */
const bilesenler = { AgSemasi, BuyukCumle, Gorsel, Kaynaklar };

/** MDX metnini derleme sırasında React'e çevirir. */
export async function Mdx({ kaynak }: { kaynak: string }) {
  const { default: Icerik } = await evaluate(kaynak, calisma);
  return <Icerik components={bilesenler} />;
}
