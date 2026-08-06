import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import StoreHero from "../components/Stores/StoreHero";
import StoreCard from "../components/Stores/StoreCard";
import Footer from "../components/Footer/Footer";
import stores from "../data/stores.json";
import Navbar from "../components/Navbar/Navbar";

export default function Store() {
  const location = useLocation();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (location.state?.toast) {
      setToast(location.state);
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [location.state]);

  return (
    <>
      <Navbar />
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
          <div className="pointer-events-auto inline-flex items-center gap-2 rounded-3xl border border-sky-200 bg-sky-500 px-5 py-3 text-sm text-white shadow-2xl shadow-sky-950/20 backdrop-blur-sm">
            <span>{toast.message || "Resgatado!"}</span>
            <Link
              to={toast.link || "/Perfil"}
              className="font-semibold underline text-white"
            >
              {toast.linkText || "Perfil"}
            </Link>
          </div>
        </div>
      )}

      <StoreHero />

      <section
        className="
          w-full
          bg-linear-to-b
          from-[#fefeff]
          to-[#eaf5ff]
          py-16
          px-4
          sm:px-6
          lg:px-8
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
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
