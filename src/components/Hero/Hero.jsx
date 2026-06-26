import burrinho from "../Assets/Images/burrinho-mascot.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-sky">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in oklch, oklch(0.72 0.18 45) 20%, transparent)",
          }}
        />

        <div
          className="absolute bottom-10 right-20 w-40 h-40 rounded-full blur-3xl"
          style={{
            background:
              "color-mix(in oklch, oklch(0.72 0.11 235) 30%, transparent)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent text-blue-burrinho-deep px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            ✨ Descontos exclusivos para assinantes
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-display font-bold leading-tight text-foreground">
            Economize com o<span className="text-primary">Burrinho</span> mais
            esperto de Taubaté!
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Faça parte do nosso clube de benefícios e libere cupons de desconto
            exclusivos nos melhores restaurantes e lojas da região.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="#planos"
              className="rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
            >
              👑 Assinar o Clube
            </Link>

            <Link
              to="#como"
              className="rounded-full border-2 border-blue-burrinho-deep bg-card px-7 py-3.5 font-bold text-blue-burrinho-deep"
            >
              Como funciona
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm">
            <div>
              <div className="font-display text-2xl font-bold text-primary">
                +500
              </div>

              <div className="text-muted-foreground">Economizados/mês</div>
            </div>

            <div>
              <div className="font-display text-2xl font-bold text-blue-burrinho-deep">
                +120
              </div>

              <div className="text-muted-foreground">Parceiros locais</div>
            </div>

            <div>
              <div className="font-display text-2xl font-bold text-primary">
                100%
              </div>

              <div className="text-muted-foreground">Verificados</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-72 h-72 rounded-full blur-2xl"
              style={{
                background:
                  "color-mix(in oklch, oklch(0.72 11 235) 20%, transparent)",
              }}
            />
          </div>

          <img
            src={burrinho}
            alt="Mascote burrinho azul segurando cupom"
            className="relative w-96 max-w-full animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
