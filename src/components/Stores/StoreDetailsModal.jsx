import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import coupons from "../../data/couponsData.json";
import { useAuth } from "../../context/AuthContext";
import CardCupom from "../../Pages/CardCupon";

export default function StoreDetailsModal({ store, onClose }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  function requestClose() {
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 220);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") requestClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  function handleRedeemed(cupom) {
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
      navigate("/lojas", {
        state: {
          toast: true,
          message: `✅ Cupom "${cupom.code}" resgatado! Dê uma olhada no seu perfil.`,
          link: "/Perfil",
          linkText: "Perfil",
        },
      });
    }, 220);
  }

  const storeCoupons = coupons.filter((c) => c.store === store.name);
  const mapQuery = encodeURIComponent(store.address || store.name);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isClosing ? "animate-modal-out" : "animate-modal-in"
      }`}
      onClick={requestClose}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        className={`
          relative z-10 w-full max-w-lg
          max-h-[85vh] overflow-y-auto
          rounded-2xl bg-card
          border-2 border-border
          p-6 sm:p-8
          shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]
          transition-all duration-200 ease-out
          ${isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={requestClose}
          aria-label="Fechar"
          className="
            absolute top-4 right-4
            h-8 w-8 flex items-center justify-center
            rounded-full text-muted-foreground
            hover:bg-black/5 hover:text-foreground
            transition-colors
          "
        >
          ✕
        </button>

        <div className="flex items-center gap-3">
          <span className="text-3xl">🛍️</span>
          <div>
            <h3 className="font-display font-bold text-xl">{store.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {store.category}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          {store.description}
        </p>

        {store.address && (
          <div className="mt-6">
            <h4 className="mb-3 font-display font-bold text-base sm:text-lg">
              Localização
            </h4>
            <div className="overflow-hidden rounded-xl border-2 border-border">
              <iframe
                title={`Mapa - ${store.name}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-2 flex items-start justify-between gap-3">
              <p className="text-xs sm:text-sm text-muted-foreground">
                📍 {store.address}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-xs sm:text-sm font-bold text-blue-burrinho-deep underline"
              >
                Ver no Maps
              </a>
            </div>
          </div>
        )}

        <h4 className="mt-6 mb-3 font-display font-bold text-base sm:text-lg">
          Cupons disponíveis
        </h4>
        <CardCupom store={store} onRedeemed={handleRedeemed} />
        {storeCoupons.length > 0 && !isAuthenticated && (
          <p className="mt-4 text-sm text-center text-muted-foreground">
            Faça{" "}
            <Link
              to="/login"
              onClick={requestClose}
              className="font-bold text-blue-burrinho-deep underline"
            >
              login
            </Link>{" "}
            para resgatar os cupons desta loja.
          </p>
        )}
      </div>
    </div>
  );
}
