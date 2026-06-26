import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StoreHero from "../components/Stores/StoreHero";
import StoreCard from "../components/Stores/StoreCard";
import stores from "../data/stores.json";

export default function Stores() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StoreHero />
      
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <StoreCard
              key={index} 
              store={store}
            />
          ))}
        </div>
      </section>
    </div>
  );
}