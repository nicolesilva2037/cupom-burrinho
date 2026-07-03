import StepCard from "./StepCard";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Assine o Clube",
      description:
        "Escolha o plano ideal para você e garanta seu acesso VIP à nossa plataforma de cupons.",
    },

    {
      number: 2,
      title: "Liberte os Cupons",
      description:
        "Acesse sua conta para visualizar e resgatar os códigos exclusivos das lojas parceiras.",
    },

    {
      number: 3,
      title: "Economize no Checkout",
      description:
        "Insira o código do seu cupom na hora do pagamento e veja o preço cair na hora.",
    },
  ];

  return (
    <section id="como" className="py-16 bg-gradient-sky">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Como o burrinho te ajuda?
          </h2>

          <p className="text-muted-foreground mt-2">
            Três passinhos simples para começar a economizar de verdade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:px-6">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
