export default function AboutStory() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-card rounded-2xl p-8 border-2 border-border">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-2xl">
              🐴
            </div>

            <h2 className="mt-4 font-display font-bold text-2xl tracking-[-0.01em]">
              Nossa história
            </h2>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Tudo começou com uma frustração comum: cupom que não funciona
              na hora do checkout. Cansados disso, decidimos criar um espaço
              onde cada desconto é testado e organizado, para que ninguém
              perca tempo (nem dinheiro) tentando economizar.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border-2 border-border">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-2xl">
              🎯
            </div>

            <h2 className="mt-4 font-display font-bold text-2xl tracking-[-0.01em]">
              Nossa missão
            </h2>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Conectar pessoas a lojas parceiras por meio de cupons reais e
              verificados, tornando a economia no dia a dia simples,
              confiável e, por que não, um pouco mais divertida.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
