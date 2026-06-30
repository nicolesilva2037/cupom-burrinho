import PartnerCard from "./PartnerCard";
import stores from "../../data/stores.json";

// esse arquivo é os parceiros da HOME

export default function Partners() {
  return (
    <section
      id="lojas"
      className=" mx-auto px-4 py-16 bg-linear-to-b from-[#eaf5ff] to-[#fefeff]"
    >
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Alguns de nossos parceiros
          </h2>

          <p className="text-muted-foreground mt-2">
            Grandes marcas e estabelecimentos locais que dão descontos para
            nossos assinantes
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {stores.slice(0, 3).map((store) => (
            <PartnerCard key={store} name={store} />
          ))}
        </div>
      </div>
    </section>
  );
}
