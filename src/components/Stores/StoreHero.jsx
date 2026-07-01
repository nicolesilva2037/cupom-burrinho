export default function StoreHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-sky
        py-14
        sm:py-16
        lg:py-24
        -mt-16
      "
    >
      {/* Fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            -top-10
            -left-10
            w-32 h-32
            sm:w-52 sm:h-52
            rounded-full
            blur-3xl
            opacity-40
          "
          style={{
            background:
              "color-mix(in oklch, oklch(0.72 0.18 45) 20%, transparent)",
          }}
        />

        <div
          className="
            absolute
            -bottom-10
            -right-10
            w-32 h-32
            sm:w-52 sm:h-52
            rounded-full
            blur-3xl
            opacity-40
          "
          style={{
            background:
              "color-mix(in oklch, oklch(0.72 0.11 235) 30%, transparent)",
          }}
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
          text-center
        "
      >
        <h1
          className="
            mx-auto
            max-w-4xl
            font-display
            font-bold
            leading-tight

            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Lojas que ajudam você a economizar com o Burrinho!
        </h1>

        <p
          className="
            mt-6
            mx-auto
            max-w-2xl
            text-sm
            sm:text-base
            md:text-lg
            text-muted-foreground
            leading-relaxed
          "
        >
          Confira todos os parceiros que oferecem descontos exclusivos para
          membros do clube.
        </p>
      </div>
    </section>
  );
}
