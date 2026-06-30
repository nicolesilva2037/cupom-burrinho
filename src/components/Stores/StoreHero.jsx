export default function StoreHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#fefeff] to-[#eaf5ff]  py-24 -mt-17">
      <div className="absolute inset-0 pointer-events-none overflow-hidden"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h1
          className="
            text-5xl
            md:text-7xl
            font-display
            font-bold
            leading-tight
            animate-[fadeIn_.7s_ease]
          "
        >
          Lojas que ajudam você a{" "}
          <span className="text-blue-burrinho">economizar</span>
          <br />
          com o Burrinho
        </h1>

        <p
          className="
            mt-8
            text-2xl
            text-muted-foreground
            max-w-2xl
            mx-auto
            leading-8
            animate-[fadeIn_.9s_ease]
          "
        >
          Confira todas as lojas parceiras que oferecem descontos exclusivos
          para membros do Clube do Burrinho e economize em cada compra.
        </p>

        <div className="mt-16 flex justify-center">
          <div
            className="
              w-20
              h-20
              rounded-full              
              flex
              items-center
              justify-center
              animate-bounce
              text-8xl
            "
          >
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}
