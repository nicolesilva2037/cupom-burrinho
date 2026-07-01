import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PricingCards from "../components/HowCouponWorks/PricingCard";
import ComparisonTable from "../components/HowCouponWorks/ComparisionTable";

export default function HowCouponWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-sky">
      <Navbar />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center m-10">
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Escolha o plano ideal para economizar todos os meses
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Aproveite descontos exclusivos, cashback, benefícios especiais e
          descubra os melhores estabelecimentos parceiros da sua região.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
            Começar gratuitamente
          </button>

          <button className="rounded-full border border-border bg-background px-8 py-3 font-semibold transition hover:border-blue-600 hover:text-blue-600">
            Ver parceiros
          </button>
        </div>
      </div>
      <PricingCards />
      <ComparisonTable />
      <Footer />
    </section>
  );
}
