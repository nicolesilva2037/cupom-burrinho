export default function FAQ() {
  return (
    <div className="bg-linear-to-b from-[#fefeff] to-[#eaf5ff]">
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Dúvidas frequentes
          </h2>

          <p className="text-muted-foreground mt-2">
            Algumas respostas rápidas antes de falar conosco.
          </p>
        </div>

        <div className="space-y-4">
          <details className="bg-card border-2 border-border rounded-2xl p-5">
            <summary className="font-bold cursor-pointer">
              Como reportar um cupom inválido?
            </summary>
            <p className="mt-3 text-muted-foreground">
              Envie o nome da loja e o cupom pelo formulário acima.
            </p>
          </details>

          <details className="bg-card border-2 border-border rounded-2xl p-5">
            <summary className="font-bold cursor-pointer">
              Posso anunciar minha loja?
            </summary>
            <p className="mt-3 text-muted-foreground">
              Sim. Entre em contato para avaliarmos uma parceria.
            </p>
          </details>

          <details className="bg-card border-2 border-border rounded-2xl p-5">
            <summary className="font-bold cursor-pointer">
              Quanto tempo demora a resposta?
            </summary>
            <p className="mt-3 text-muted-foreground">
              Normalmente respondemos em até 1 dia útil.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
