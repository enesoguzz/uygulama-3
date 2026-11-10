import Link from "next/link";
import { site } from "@/site";
import { Logo } from "./ikonlar";
import { Menu } from "./Menu";
import s from "./Ust.module.css";

/**
 * Üstte ortada logo, sağ köşede menü düğmesi.
 * `acilisUstunde` iken lacivert açılış alanının üzerine biner; açılış gizliyse
 * ya da sayfada açılış yoksa açık zeminde, akışın içinde durur.
 */
export function Ust({ acilisUstunde = false }: { acilisUstunde?: boolean }) {
  return (
    <header className={acilisUstunde ? `${s.ust} ${s.uzerinde}` : s.ust}>
      <Link href="/" aria-label="Ana sayfa" className={s.logo}>
        <Logo />
      </Link>
      <Menu ingilizce={site.ozellikler.ingilizce} />
    </header>
  );
}
