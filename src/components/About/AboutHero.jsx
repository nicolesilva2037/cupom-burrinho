import burrinhoGif from "../../assets/images/Burrinho Gif.gif";

export default function AboutHero() {
  return (
    <div className="bg-linear-to-b from-[#fefeff] to-[#eaf5ff]">
      <section className="relative overflow-hidden py-20 md:py-20 -mt-17">
        <div className="relative max-w-6xl mx-auto px-4 m-15">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="sm:px-8">
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-none">
                A gente acredita que economizar
                <span className="text-primary"> não precisa ser complicado. </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                O Clube do Burrinho nasceu de uma ideia simples: reunir os
                melhores cupons e descontos em um só lugar, sem letra
                miúda e sem enrolação. Conhece a nossa história.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/lojas"
                  className="rounded-full bg-primary px-8 py-4 font-bold shadow-xl text-primary-foreground hover:scale-105 transition"
                >
                  Ver lojas parceiras
                </a>

                <a
                  href="/como-funciona"
                  className="rounded-full border-2 border-border bg-card px-8 py-4 font-bold"
                >
                  Como funciona
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-4xl p-4 shadow-soft">
                <div className="mt-4 rounded-3xl h-105 flex items-center justify-center md:block">
                  <img
                    src={burrinhoGif}
                    alt="Mascote Burrinho animado"
                    className="w-full rounded-3xl p-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
