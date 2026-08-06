import ValueCard from "./ValueCard";

export default function AboutValues() {
  const values = [
    {
      icon: "💸",
      title: "Economia de verdade",
      description:
        "Cupons testados de verdade, sem promessa vazia nem letra miúda escondida.",
    },
    {
      icon: "🤝",
      title: "Confiança",
      description:
        "Parcerias transparentes com lojas que realmente entregam o desconto anunciado.",
    },
    {
      icon: "🚀",
      title: "Simplicidade",
      description:
        "Poucos cliques entre você e o código de desconto. Sem complicação.",
    },
    {
      icon: "🐴",
      title: "Comunidade",
      description:
        "Feito para quem quer economizar junto e indicar as melhores lojas.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-sky">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            O que nos move
          </h2>

          <p className="text-muted-foreground mt-2">
            Os valores que guiam cada cupom que colocamos no ar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
