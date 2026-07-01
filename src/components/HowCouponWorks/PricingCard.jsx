const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    description: "Ideal para começar a economizar",
    highlight: false,
    features: [
      "Acesso aos cupons básicos",
      "Resgates limitados por mês",
      "Acesso aos parceiros",
      "Promoções abertas",
    ],
    button: "Começar grátis",
  },
  {
    name: "Premium",
    price: "R$ 14,90",
    description: "Mais escolhido pelos usuários",
    highlight: true,
    features: [
      "Tudo do plano gratuito",
      "Cupons exclusivos",
      "Resgates ilimitados",
      "Cashback em parceiros",
      "Ofertas antecipadas",
      "Suporte prioritário",
    ],
    button: "Assinar Premium",
  },
  {
    name: "VIP",
    price: "R$ 29,90",
    description: "Máxima economia e benefícios",
    highlight: false,
    features: [
      "Tudo do Premium",
      "Cashback ampliado",
      "Promoções VIP",
      "Eventos exclusivos",
      "Brindes especiais",
      "Atendimento VIP",
    ],
    button: "Quero VIP",
  },
];

export default function PricingCards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Escolha seu plano
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Comece grátis e evolua conforme sua necessidade de economia
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl border p-6 transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                ${
                  plan.highlight
                    ? "border-blue-600 bg-blue-50 scale-105"
                    : "border-border bg-white"
                }
              `}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Mais escolhido
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold">{plan.name}</h3>

              <p className="text-muted-foreground text-sm mt-1">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-4 text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground">
                  /mês
                </span>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`
                  mt-6 w-full rounded-full py-2 font-semibold transition
                  ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
