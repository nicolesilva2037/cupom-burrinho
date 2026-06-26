import PartnerCard from "./PartnerCard";
import stores from "../../data/stores.json";

export default function Partners(){

  return (

    <section id="lojas" className="max-w-6xl mx-auto px-4 py-16">

      <div className="text-center mb-10">

        <h2 className="text-3xl md:text-4xl font-display font-bold">
          Alguns de nossos parceiros
        </h2>

        <p className="text-muted-foreground mt-2">
          Grandes marcas e estabelecimentos locais que dão descontos para nossos assinantes
        </p>

      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {stores.map((store)=>(

          <PartnerCard
            key={store}
            name={store}
          />

        ))}

      </div>


    </section>

  )

}