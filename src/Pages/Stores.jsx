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
      <section className="w-12/12 p-20 bg-linear-to-b from-[#fefeff] to-[#eaf5ff]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold ">
            Alguns de nossos parceiros
          </h2>
          <p className="text-muted-foreground mt-2">
            Grandes marcas e estabelecimentos locais que dão descontos para
            nossos assinantes
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stores.map((store) => (
            <StoreCard key={store} store={store} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
