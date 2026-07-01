import StoreHero from "../components/Stores/StoreHero";
import StoreCard from "../components/Stores/StoreCard";
import Footer from "../components/Footer/Footer";
import stores from "../data/stores.json";
import Navbar from "../components/Navbar/Navbar";

export default function Store() {
  return (
    <>
      <Navbar />

      <StoreHero />

      <section
        className="
          w-full
          bg-linear-to-b
          from-[#fefeff]
          to-[#eaf5ff]
          py-14
          sm:py-16
          lg:py-20
          px-4
          sm:px-6
          lg:px-8
          -mt-24
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Alguns de nossos parceiros
            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              Grandes marcas e estabelecimentos locais que dão descontos para
              nossos assinantes.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >
            {stores.map((store) => (
              <StoreCard key={store} store={store} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
