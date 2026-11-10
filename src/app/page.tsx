import { Acilis } from "@/bilesenler/Acilis";
import { DoktrinMetni } from "@/bilesenler/DoktrinMetni";
import { EpostaKaydi } from "@/bilesenler/EpostaKaydi";
import { KayanBant } from "@/bilesenler/KayanBant";
import { SayiSeridi } from "@/bilesenler/SayiSeridi";
import { Siradakiler } from "@/bilesenler/Siradakiler";
import { Ust } from "@/bilesenler/Ust";
import { yakindakiler, yayindakiler } from "@/lib/doktrinler";
import { site } from "@/site";

export default function AnaSayfa() {
  const yayinda = yayindakiler();
  const yakinda = yakindakiler();
  const [enYeni] = yayinda;

  return (
    <>
      <Ust acilisUstunde />
      <main>
        <Acilis {...site.acilis} />
        <SayiSeridi
          sayilar={[
            { deger: yayinda.length, etiket: "YAYINDA" },
            { deger: yakinda.length, etiket: "YOLDA" },
            { deger: site.sayilar.baslangicYili, etiket: "BAŞLANGIÇ" },
            { deger: site.sayilar.sponsor, etiket: "SPONSOR" },
          ]}
        />
        <KayanBant sloganlar={site.bant} />
        {enYeni && <DoktrinMetni doktrin={enYeni} bicim="giris" />}
        <Siradakiler doktrinler={yakinda} />
        {site.ozellikler.epostaKaydi && <EpostaKaydi />}
      </main>
    </>
  );
}
