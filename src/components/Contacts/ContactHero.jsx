import burrinho from "../../assets/images/burrinho-mascot.png";

export default function ContactHero() {
  return (
    <div className="bg-linear-to-b from-[#fefeff] to-[#eaf5ff]">
      <section className="relative overflow-hidden py-20 md:py-28 -mt-17">
        <div className="relative max-w-6xl mx-auto px-4 m-15">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="sm:px-8">
              <h1 className="mt-6 text-5xl md:text-7xl font-display font-bold leading-none">
                Achou um cupom quebrado?
                <span className="text-primary"> O Burrinho resolve. </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Lembre-se que estamos apenas a um relincho de distância.
                Encontrou um cupom que não funciona? Tem uma sugestão? Quer
                divulgar sua loja? Manda uma mensagem que nossa equipe responde
                o mais rápido possível.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#formulario"
                  className="rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground hover:scale-105 transition"
                >
                  Enviar mensagem
                </a>

                <a
                  href="#contatos"
                  className="rounded-full border-2 border-border bg-card px-8 py-4 font-bold"
                >
                  Ver contatos
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-4xl p-4 shadow-soft">
                <div className="mt-4 rounded-3xl h-105 flex items-center justify-center md:block">
                  <img
                    src="src\assets\images\Burrinho pensativo.png"
                    alt="Mascote Burrinho"
                    className="w-full animate-float p-10"
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
