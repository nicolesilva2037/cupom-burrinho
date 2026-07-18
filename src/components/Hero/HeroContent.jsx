import { Link } from "react-router-dom";

export default function HeroContent({ render }) {
  return (
    <div className="z-10">
      <h1
        className="mt-6 text-3xl md:text-6xl font-display font-bold leading-tight text-foreground transition-transform duration-300"
        style={{
          transform: `translate(${render.x * 4}px, ${render.y * 4}px)`,
        }}
      >
        Economize com o{" "}
        <span className="text-primary relative">
          Burrinho
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/40 blur-sm" />
        </span>{" "}
        mais esperto de Taubaté!
      </h1>

      <p
        className="mt-5 text-lg text-muted-foreground max-w-lg transition-transform duration-300"
        style={{
          transform: `translate(${render.x * 2}px, ${render.y * 2}px)`,
        }}
      >
        Faça parte do nosso clube de benefícios e libere cupons de desconto
        exclusivos nos melhores restaurantes e lojas da região.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="como-funciona"
          className="group relative rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg
          transition-all duration-300 hover:scale-[1.04] hover:shadow-xl active:scale-95"
        >
          <span className="relative z-10">Assinar o Clube</span>
          <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </div>
  );
}
