export default function StoreHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-sky py-12 md:py-20 -mt-17">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in oklch, oklch(0.72 0.18 45) 20%, transparent)",
          }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in oklch, oklch(0.72 0.11 235) 30%, transparent)",
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1
          className="
            text-3xl 
            sm:text-4xl 
            md:text-6xl 
            font-display 
            font-bold 
            my-10 
            md:my-20
          "
        >
          Lojas que ajudam você a economizar com o Burrinho!
        </h1>
        <p
          className="
            mt-5
            text-base 
            md:text-lg
            text-muted-foreground
            max-w-2xl
            mx-auto
            font-extralight
          "
        >
          Confira todos os parceiros que oferecem descontos exclusivos para
          membros do clube.
        </p>
      </div>
    </section>
  );
}
