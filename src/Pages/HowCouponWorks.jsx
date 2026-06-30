import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function HowCouponWorks() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#fefeff] to-[#eaf5ff]">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mt-8">
            Como funcionam os
            <span> cupons do Burrinho?</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400 leading-8">
            Descubra como acessar seus cupons exclusivos, copiar os códigos e
            economizar nas suas compras em poucos minutos.
          </p>

          <button className="mt-10 bg-blue-burrinho-deep hover:bg-blue-burrinho-deep duration-300 text-white px-8 py-4 rounded-xl font-semibold">
            Quero começar a economizar
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
