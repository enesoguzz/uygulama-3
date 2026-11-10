type IkonOzellikleri = { boyut?: number };

/** Yer tutucu logo: halka içinde nokta. */
export function Logo({ boyut = 32 }: IkonOzellikleri) {
  return (
    <svg aria-hidden="true" width={boyut} height={boyut} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="16" cy="16" r="13" />
      <circle cx="16" cy="16" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuIkonu() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 6H15M3 12H15" />
    </svg>
  );
}

export function OynatIkonu() {
  return (
    <svg aria-hidden="true" width="12" height="14" viewBox="0 0 14 16" fill="currentColor">
      <path d="M1 1L13 8L1 15Z" />
    </svg>
  );
}

const okYollari = {
  asagi: "M7 2V12M3 8L7 12L11 8",
  yukari: "M7 12V2M3 6L7 2L11 6",
  sag: "M2 7H12M8 3L12 7L8 11",
} as const;

export function Ok({ yon }: { yon: keyof typeof okYollari }) {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d={okYollari[yon]} />
    </svg>
  );
}

/** Açılış yer tutucusundaki kişi çizimi; çocuk daha küçük çizilir. */
export function KisiCizimi({ kucuk = false }: { kucuk?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {kucuk ? (
        <>
          <circle cx="40" cy="42" r="13" />
          <path d="M16 92C16 76 27 66 40 66C53 66 64 76 64 92" />
        </>
      ) : (
        <>
          <circle cx="40" cy="34" r="16" />
          <path d="M10 92C10 70 24 60 40 60C56 60 70 70 70 92" />
        </>
      )}
    </svg>
  );
}
